import AppLayout from "@/layouts/app-layout"
import { BreadcrumbItem, Comment, Post } from "@/types"
import { Head, useForm, usePage } from "@inertiajs/react"
import { useState } from "react";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show',
        href: '/show',
    },
];


const Show = ({ post, isLiked, likesCount, comments }: { post: Post, isLiked: boolean, likesCount: number, comments: Comment[] }) => {
    const { post: postAction, processing, data, setData } = useForm({
        comment: ""
    });
    const [isOpen, setIsOpen] = useState(false)
    const { auth } = usePage();
    console.log(comments)
    const handleLike = (id: string | number) => {
        if (!isLiked) {
            postAction(route("post.like", id), {
                preserveScroll: true,
                onSuccess: () => {
                }
            });
        } else {
            postAction(route("post.unlike", id), {
                preserveScroll: true,
                onSuccess: () => {
                }
            });
        }

    }

    const handleComment = (e: React.FormEvent<HTMLFormElement>, id: number | string) => {
        e.preventDefault();
        postAction(route("post.comment", id), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Comment added successfully")
            }
        })
    }

    const openCommentBox = () => {
        setIsOpen(!isOpen)
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Index" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 border-[1px] border-white rounded-3xl">
                    <div className="lg:col-span-2 max-h-[750px] rounded-3xl bg-white shadow-lg dark:bg-neutral-800 overflow-hidden">
                        <img
                            className="w-full h-full object-cover rounded-2xl"
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg"
                            alt="Product preview"
                        />
                    </div>

                    <div className="lg:col-span-1 max-h-[750px] rounded-3xl p-6 text-white">
                        <div className="w-full flex justify-start items-center gap-2">
                            <div className="rounded-full flex justify-center items-center w-16 h-16 overflow-hidden border-1 hover:border-2 border-white shadow-lg">
                                <img className="rounded-full" src={"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg"} alt="avatar" />
                            </div>
                            <div className="w-full flex justify-center items-start flex-col">
                                <p className="text-lg font-bold">{post.user.name}</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center h-[1px] border-[1px] border-neutral-800 my-4 rounded-3xl"></div>

                        <div className="flex border-t border-neutral-100 dark:border-neutral-800 text-gray-500 dark:text-neutral-400 text-sm font-medium divide-x divide-neutral-100 dark:divide-neutral-800">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleLike(post.id);
                                }}
                                className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                            >
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 flex items-center justify-center py-3 cursor-pointer"
                                >
                                    {processing ? "Wait" : (
                                        <>
                                            <AiOutlineLike className="mr-2" />
                                            Like {likesCount}
                                        </>
                                    )}
                                </button>
                            </form>
                            <button onClick={openCommentBox} type='button' className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer">
                                <AiOutlineComment className="mr-2" /> Comment
                            </button>
                            <button type='button' className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <AiOutlineShareAlt className="mr-2" /> Share
                            </button>
                        </div>
                        <form onSubmit={(e) => handleComment(e, post.id)} className={`w-full flex justify-center items-start gap-2 flex-col my-6  ${isOpen ? "flex" : "hidden"}`}>
                            <textarea
                                id="comment"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="comment"
                                placeholder="Add a comment..."
                                onChange={(e) => setData('comment', e.target.value)}
                                className={`(
                                    "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                                )`}
                            >{data.comment}</textarea>
                            <button type="submit" className="py-2 px-4 text-center bg-white dark:bg-neutral-100 text-blue-600 dark:text-blue-800 rounded-lg font-medium hover:bg-opacity-90 transition cursor-pointer hover:">Post</button>
                        </form>
                        <div className="my-4 flex justify-center items-start flex-col gap-2 border-b-[1px] border-neutral-800 py-2">
                            {comments.map((comment: Comment) => (
                                <div key={comment.id} className="w-full flex gap-4 p-4 border-b border-gray-200 dark:border-neutral-700">
                                    {/* User Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="rounded-full w-10 h-10 overflow-hidden bg-gray-200 dark:bg-neutral-600">
                                            {comment.user?.avatar ? (
                                                <img
                                                    src={comment.user.avatar}
                                                    alt={`${comment.user.name}'s avatar`}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-sm">
                                                    {comment.user?.name.charAt(0).toUpperCase()}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Comment Content */}
                                    <div className="flex-1">
                                        {/* Comment Header */}
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                {comment.user?.name || 'Anonymous'}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-neutral-400">
                                                {new Date(comment.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </span>
                                        </div>

                                        {/* Comment Text */}
                                        <p className="text-gray-800 dark:text-neutral-200 mb-2">
                                            {comment.comment}
                                        </p>

                                        {/* Comment Actions */}
                                        <div className="flex gap-4 text-sm text-gray-500 dark:text-neutral-400">
                                            <button
                                                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                            // onClick={() => handleLikeComment(comment.id)}
                                            >
                                                Like
                                            </button>
                                            <button className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                                Reply
                                            </button>
                                            <button
                                                className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                            // onClick={() => handleDeleteComment(comment.id)}
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="bg-white text-blue-600 dark:bg-neutral-100 dark:text-blue-800 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Show