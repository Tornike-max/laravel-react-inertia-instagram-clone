<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Models\Comment;
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
        $isLiked = $this->isLiked($post);
        $likesCount = $post->likes()->count();
        $comments = Comment::query()->with("post")->where('post_id','=',$post->id)->orderBy('created_at','desc')->get();
        return inertia("posts/Show",[
            'post'=>$postData,
            "isLiked"=>$isLiked,
            "likesCount"=>$likesCount,
            "comments"=>$comments
        ]);
    }

    public function like(Post $post)
    {
        $user = Auth::user();

       
        if (!$user->likes()->where('post_id', $post->id)->exists()) {
            $user->likes()->attach($post->id);
        }
    }

    /**
     * პოსტის მოწონების მოხსნა.
     */
    public function unlike(Post $post)
    {
        $user = Auth::user();

        if ($user->likes()->where('post_id', $post->id)->exists()) {
            $user->likes()->detach($post->id);
        }
    }

    /**
     * ამოწმებს, მოწონებული აქვს თუ არა მომხმარებელს პოსტი.
     */
    public function isLiked(Post $post)
    {
        $isLiked = Auth::user()->likes()->where('post_id', $post->id)->exists();
        
        return $isLiked;
    }

    public function comment(Request $request, Post $post)
    {
        $data = $request->validate([
            'comment'=>'required|min:3|max:500'
        ]);

        Comment::create([
            'user_id'=>Auth::user()->id,
            "post_id"=>$post->id,
            'comment'=>$data['comment']
        ]);

        return redirect()->back();
    }
}
