<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $posts = Post::query()->with('user')->orderBy('created_at','desc')->get();
        
        return inertia('posts/Index',[
            'posts'=>$posts
        ]);
    }
}
