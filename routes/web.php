<?php

use App\Http\Controllers\Main\MainController;
use App\Http\Controllers\Posts\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get("/dashboard",[MainController::class,'index'])->name('dashboard');
Route::get("/posts",[PostController::class,'index'])->name('posts');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
