<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'image' => $this->image,
            'slug' => $this->slug,
            'published' => $this->published,
            'published_at' => $this->published_at,
            'user_id' => $this->user_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'user' => new UserResource($this->whenLoaded("user")),
            'likesCount' => $this->likes->count(),
            'commentsCount' => $this->comments->count(),
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'likes' => LikeResource::collection($this->whenLoaded('likes')),
        ];
    }
}
