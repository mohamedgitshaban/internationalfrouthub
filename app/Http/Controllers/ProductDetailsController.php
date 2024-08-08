<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;

use App\Models\ProductDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductDetailsController extends Controller
{


    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'product_id' => 'required|exists:products,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:2000',
        ]);
        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(),"status"=>Response::HTTP_UNPROCESSABLE_ENTITY]);
        }
        else{
            $validate=$validate->validated();
            ProductDetails::create($validate);
            return response()->json(['message' => 'Client created successfully',"status"=>Response::HTTP_CREATED]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $Client= ProductDetails::find($id);
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
            'productid' => 'required|exists:products,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:2000',
        ]);
        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(),"status"=>Response::HTTP_UNPROCESSABLE_ENTITY]);
        }
        else{
            $validate=$validate->validated();
            $Client= ProductDetails::where("id",$id)->update($validate);
            return response()->json(['message' => 'Client updated successfully',"status"=>Response::HTTP_CREATED]);
        }
    }
    public function destroy( $id)
    {
        $Client= ProductDetails::find($id);
        if($Client!=null){
            $Client->delete();
            return response()->json(['message' => ' deleted successfully',"status"=>Response::HTTP_FOUND]); }
        else{
            return response()->json(["data"=>"there is no data","status"=>Response::HTTP_NO_CONTENT ]);
        }
    }
}
