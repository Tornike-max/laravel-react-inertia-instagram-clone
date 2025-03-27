import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Post',
        href: '/post/show',
    },
];

const post = {
    id: 4,
    user_id: 2,
    user_name: "John Doe",
    user_avatar: "https://via.placeholder.com/50x50.png/0088cc?text=JD",
    title: "Magnam dolor molestiae voluptatum deserunt consequatur repudiandae.",
    content: "Sequi eos nobis et omnis doloremque consequatur. Inventore libero nesciunt et ut minus alias explicabo. Impedit quis eaque minus voluptatibus qui.",
    image: "https://via.placeholder.com/640x480.png/009944?text=nisi",
    likes: 42,
    comments: 7,
    shares: 3,
    published_at: "2025-03-18 13:43:57"
};

const Show = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={post.title} />
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden my-6">
                {/* Post Header */}
                <div className="flex items-center p-4">
                    <img 
                        src={post.user_avatar} 
                        alt={post.user_name}
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <div className="font-semibold text-gray-900">{post.user_name}</div>
                        <div className="text-xs text-gray-500">
                            {new Date(post.published_at).toLocaleString()}
                        </div>
                    </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-2">
                    <p className="text-gray-800 mb-4 whitespace-pre-line">{post.content}</p>
                </div>

                {/* Post Image */}
                {post.image && (
                    <div className="border-t border-gray-200">
                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full"
                        />
                    </div>
                )}

                {/* Post Stats */}
                <div className="px-4 py-2 border-t border-gray-200 text-sm text-gray-500">
                    <span>{post.likes} likes</span>
                    <span className="ml-4">{post.comments} comments</span>
                    <span className="ml-4">{post.shares} shares</span>
                </div>

                {/* Action Buttons */}
                <div className="flex border-t border-gray-200 text-gray-500 text-sm font-medium">
                    <button className="flex-1 flex items-center justify-center py-3 hover:bg-gray-100">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        Like
                    </button>
                    <button className="flex-1 flex items-center justify-center py-3 hover:bg-gray-100">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Comment
                    </button>
                    <button className="flex-1 flex items-center justify-center py-3 hover:bg-gray-100">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share
                    </button>
                </div>
            </div>
        </AppLayout>
    );
};

export default Show;