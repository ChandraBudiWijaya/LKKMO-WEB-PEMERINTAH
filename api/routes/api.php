<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UmkmController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\InstitusiController;


Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function(Request $request) {
        return $request->user();
    });
    Route::post('/berita/post', [BeritaController::class, 'store']);
    Route::put('/berita/update/{id}', [BeritaController::class, 'update']);
    Route::delete('/berita/delete/{id}', [BeritaController::class, 'destroy']);

    Route::post('/umkm/post', [UmkmController::class, 'store']);
    Route::put('/umkm/update/{id}', [UmkmController::class, 'update']);
    Route::delete('/umkm/delete/{id}', [UmkmController::class, 'destroy']);

    Route::post('/institusi/post', [InstitusiController::class, 'store']);
    Route::put('/institusi/update/{id}', [InstitusiController::class, 'update']);
    Route::delete('/institusi/delete/{id}', [InstitusiController::class, 'destroy']);
    
    Route::post('/institusi/detail-institusi/post', [InstitusiController::class, 'store']);
    Route::put('/institusi/detail-institusi/update/{id}', [InstitusiController::class, 'update']);
    Route::delete('/institusi/detail-institusi//delete/{id}', [InstitusiController::class, 'destroy']);

});

Route::get('/berita/get', [BeritaController::class, 'index']);
Route::get('/berita/{id}', [BeritaController::class, 'show']);
Route::get('/umkm/get', [UmkmController::class, 'index']);
Route::get('/umkm/{id}', [UmkmController::class, 'show']);
Route::get('institusi/get', [InstitusiController::class, 'index']);
Route::get('institusi/{id}', [InstitusiController::class, 'show']);
Route::get('institusi/detail-institusi/get', [InstitusiController::class, 'index']);
Route::get('institusi/detail-institusi/{id}', [InstitusiController::class, 'show']);