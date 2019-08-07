<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
});
Route::prefix('/')->group(function () {
    Route::get('/','Frontend\\PagesController@index')->name('index');
    Route::get('/gioi-thieu','Frontend\\PagesController@getAbout')->name('about');
    Route::get('/lien-he','Frontend\\PagesController@getContact')->name('contact');
           
});