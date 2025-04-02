<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'address',
        'city',
        'bio',
        'image',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * მომხმარებლის პოსტები.
     */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /**
     * მომხმარებლის მოწონებული პოსტები.
     */
    public function likes()
    {
        return $this->belongsToMany(Post::class, 'like_post')->withTimestamps();
    }
}
