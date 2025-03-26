<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index(){
        $posts = Post::query()->with('user')->orderBy('created_at','desc')->get();
        
        return inertia('posts/Index',[
            'posts'=>$posts
        ]);
    }

    public function store(Request $request){
        $data = $request->validate([
            'title'=>'required',
            'content'=>'required'
        ]);

        if($data['title'] !== null){
            $data['slug'] = Str::slug($data['title']);
        }

        dd($data);

        Post::create([
            'title'=>$data['title'],
            'content'=>$data['content'],
            'user_id'=>Auth::user()->id,
        ]);

        return redirect()->route('posts');
    }

    public function show(Post $post)
    {
        $postData = Post::query()->with('user')->where('id','=',$post->id)->first();

        return inertia("posts/Show",[
            'post'=>$postData
        ]);
    }
}
