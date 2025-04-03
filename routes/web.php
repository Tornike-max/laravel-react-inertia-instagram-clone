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
Route::post("/post/store",[PostController::class,'store'])->name('post.store');
Route::get("/post/show/{post}",[PostController::class,'show'])->name('post.show');

//likes
Route::post('/posts/{post}/like', [PostController::class, 'like'])->name("post.like");
Route::post('/posts/{post}/unlike', [PostController::class, 'unlike'])->name("post.unlike");
Route::get('/posts/{post}/is-liked', [PostController::class, 'isLiked'])->name("post.isLiked");

//comments
Route::post('/post/{post}/comment', [PostController::class, 'comment'])->name("post.comment");
Route::delete('/post/delete/{post}', [PostController::class, 'destroyComment'])->name("post.destroy.comment");


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
