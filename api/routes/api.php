<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UmkmController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\InstansiController;


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

    Route::post('/instansi/post', [InstansiController::class, 'store']);
    Route::put('/instansi/update/{id}', [InstansiController::class, 'update']);
    Route::delete('/instansi/delete/{id}', [InstansiController::class, 'destroy']);
});

Route::get('/berita/get', [BeritaController::class, 'index']);
Route::get('/berita/{id}', [BeritaController::class, 'show']);
Route::get('/umkm/get', [UmkmController::class, 'index']);
Route::get('/umkm/{id}', [UmkmController::class, 'show']);
Route::get('instansi/get', [InstansiController::class, 'index']);
Route::get('instansi/{id}', [InstansiController::class, 'show']);
