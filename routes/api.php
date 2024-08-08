<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\FormController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::group(['prefix'=>'v1'],function () {

    Route::group(['prefix'=>'services',],function () {
        Route::get('/', [ServicesController::class,"index"]);
        Route::post('/create', [ServicesController::class,"store"]);
        Route::get('/{id}', [ServicesController::class,"show"])->where('id', '[0-9]+');
        Route::post('/{id}/update', [ServicesController::class,"update"]);
        Route::delete('/{id}', [ServicesController::class,"destroy"]);
    });
    Route::group(['prefix'=>'productdata',],function () {
        Route::get('/', [ProductDetailsController::class,"index"]);
        Route::post('/create', [ProductDetailsController::class,"store"]);
        Route::get('/{id}', [ProductDetailsController::class,"show"])->where('id', '[0-9]+');
        Route::post('/{id}/update', [ProductDetailsController::class,"update"]);
        Route::delete('/{id}', [ProductDetailsController::class,"destroy"]);
    });
    Route::group(['prefix'=>'product',],function () {
        Route::get('/', [ProductController::class,"index"]);
        Route::get('/last10', [ProductController::class,"last10"]);
        Route::post('/create', [ProductController::class,"store"]);
        Route::get('/iqfproduct', [ProductController::class,"IqfProduct"]);
        Route::get('/{id}', [ProductController::class,"show"])->where('id', '[0-9]+');
        Route::post('/{id}/update', [ProductController::class,"update"]);
        Route::delete('/{id}', [ProductController::class,"destroy"]);
    });
    Route::post('/submit-form', [FormController::class, 'submitForm']);

});
