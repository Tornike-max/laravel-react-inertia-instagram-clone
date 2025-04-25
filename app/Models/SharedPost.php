<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class SharedPost extends Model
{
    use HasFactory, Notifiable;


    protected $fillable = [
        'post_id',
        'user_id',
        'shared_at',
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
