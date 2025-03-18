<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>$this->faker->sentence,
            'content'=>$this->faker->paragraph,
            'image'=> fake()->imageUrl(),
            'slug'=>$this->faker->slug,
            'published'=>$this->faker->boolean,
            'published_at'=>$this->faker->dateTime,
            'user_id'=>2
        ];
    }
}
