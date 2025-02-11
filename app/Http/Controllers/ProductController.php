<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
class ProductController extends Controller
{
    public function index()
    {
        $data=Product::select("id","title","type","img")->where("type","!=","IQF Products")->orderBy("type")->get();
        if(!$data->isEmpty()){
            return response()->json(["data"=>$data,"status"=>Response::HTTP_OK]);
        }
        else{
            return response()->json(["data"=>"There is No Data","status"=>Response::HTTP_NO_CONTENT ]);

        }
    }
    public function last10()
    {
        $data=Product::where("type","!=","IQF Products")->orderBy('created_at', 'desc')->take(10)->get();
        if(!$data->isEmpty()){
            return response()->json(["data"=>$data,"status"=>Response::HTTP_OK]);
        }
        else{
            return response()->json(["data"=>"There is No Data","status"=>Response::HTTP_NO_CONTENT ]);

        }
    }
    public function IqfProduct()
    {
        $data=Product::latest()->where("type","IQF Products")->get();
        if(!$data->isEmpty()){
            return response()->json(["data"=>$data,"status"=>Response::HTTP_OK]);
        }
        else{
            return response()->json(["data"=>"There is No Data","status"=>Response::HTTP_NO_CONTENT ]);

        }
    }
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'colortheame' => 'required|string|max:100',
            'description' => 'required|string|max:1000',
            'img' => 'required|image|max:2048',
        ]);
        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(),"status"=>Response::HTTP_UNPROCESSABLE_ENTITY]);
        }
        else{
            $validate=$validate->validated();
            $file=$request->file('img');
            $fileName = time().'.'.$file->getClientOriginalExtension();
            $validate["img"]= '/uploads/img/'.$fileName;
            // Move the file to the desired location
            $file->move(public_path('uploads/img'), $fileName);

            Product::create($validate);
            return response()->json(['message' => 'Client created successfully',"status"=>Response::HTTP_CREATED]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $Client= Product::with("ProductDetails")->find($id);
        if($Client!=null){
            return response()->json(["data"=>$Client,"status"=>Response::HTTP_OK]);
        }
        else{
            return response()->json(["data"=>"there is no Client","status"=>Response::HTTP_NO_CONTENT ]);
        }
    }


    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'colortheame' => 'required|string|max:100',
            'description' => 'required|string|max:1000',
            'img' => 'required|image|max:2048',
        ]);
        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(),"status"=>Response::HTTP_UNPROCESSABLE_ENTITY]);
        }
        else{
            $validate=$validate->validated();
            $Client= Product::where("id",$id)->update($validate);
            return response()->json(['message' => 'Client updated successfully',"status"=>Response::HTTP_CREATED]);
        }
    }
    public function destroy( $id)
    {
        $Client= Product::find($id);
        if($Client!=null){
            $Client->delete();
            return response()->json(['message' => ' deleted successfully',"status"=>Response::HTTP_FOUND]); }
        else{
            return response()->json(["data"=>"there is no data","status"=>Response::HTTP_NO_CONTENT ]);
        }
    }
}
