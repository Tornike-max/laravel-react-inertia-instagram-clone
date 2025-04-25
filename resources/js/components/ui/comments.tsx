import {  Comment, PostItem } from '@/types'
import { useForm } from '@inertiajs/react'
import React from 'react'

const Comments = ({ post }: { post: PostItem }) => {
    const { setData, processing, data, post: postReq } = useForm({
        comment: ''
    })

    const handleComment = (e: React.FormEvent<HTMLFormElement>, postId: number) => {
        e.preventDefault()
        postReq(route('post.comment', postId), {
            onSuccess: () => {
                setData('comment', '')
            },
            onError: (errors) => {
                console.log(errors)
            },
            preserveScroll: true,
            preserveState: true
        })
    }

    console.log(post)

    return (
        <div className="w-full flex flex-col gap-5 px-4 py-6">
            {/* Comment Input */}
            <form
                onSubmit={(e) => handleComment(e, post.id)}
                className="w-full flex items-start gap-3"
            >
                <textarea
                    id="comment"
                    required
                    placeholder="Add a comment..."
                    value={data.comment}
                    onChange={(e) => setData('comment', e.target.value)}
                    className="flex-1 resize-none rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    disabled={processing}
                    className="min-w-[70px] h-9 px-3 rounded-md text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {processing ? 'Wait...' : 'Post'}
                </button>
            </form>

            {/* Comment List */}
            {post.comments.length > 0 ? (
                <div  className="flex flex-col gap-4 h-[400px] overflow-y-auto">
                    {post.comments.map((comment: Comment) => (
                        <div key={comment.id} className="flex gap-3 items-start">
                            <div className="w-9 h-9 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                            
                            {/* Comment content */}
                            <div className="flex flex-col bg-neutral-100 dark:bg-neutral-800 px-4 py-3 rounded-lg w-full">
                                <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">{comment.user?.name || 'User'}</span>
                                    <span className="text-xs text-gray-400">
                                        {comment.created_at?.slice(0, 10)}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-800 dark:text-white mt-1">
                                    {comment.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-500 text-center">No comments yet!</p>
            )}
        </div>
    )
}

export default Comments
