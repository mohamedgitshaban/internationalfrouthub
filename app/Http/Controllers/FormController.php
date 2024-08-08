<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;

class FormController extends Controller
{
    public function submitForm(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => "required|string|min:1",
            'email' => "required|email",
            'message' => "required|string|min:1",
        ]);
        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(),"status"=>Response::HTTP_UNPROCESSABLE_ENTITY]);
        }

        else{
            $formData = $request->all();

        // Send email to form submitter
        Mail::send('emails.form_submission', ['data' => $formData], function ($message) use ($formData) {
            $message->to($formData['email'])->subject('Thank you for your submission!');
        });

        // Send email to yourself
        Mail::send('emails.form_submission', ['data' => $formData], function ($message) {
            $message->to('info@internationalfruithub.com')->subject('New form submission!');
        });
        }

        // You can return a response here if needed
    }
}
