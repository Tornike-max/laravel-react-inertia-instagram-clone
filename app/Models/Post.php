<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'title',
        'content',
        'image',
        'slug',
        'published',
        'published_at',
        'user_id',
    ];

    protected $hidden = [
        'user_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * პოსტის ავტორი.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * პოსტის მოწონებები.
     */
    public function likes()
    {
        return $this->belongsToMany(User::class, 'like_post')->withTimestamps();
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function sharedPosts(){
        return $this->hasMany(SharedPost::class);
    }
}
