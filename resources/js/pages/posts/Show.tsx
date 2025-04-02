import AppLayout from "@/layouts/app-layout"
import { BreadcrumbItem, Post } from "@/types"
import { Head, useForm } from "@inertiajs/react"
import { useState } from "react";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show',
        href: '/show',
    },
];


const Show = ({ post,isLiked ,likesCount}: { post: Post,isLiked:boolean,likesCount:number }) => {
    const { post: postLikeAction, processing } = useForm({});
    const [likeCount, setLikeCount] = useState();

    const handleLike = (id: string | number) => {
        if(!isLiked){
            postLikeAction(route("post.like", id), {
                preserveScroll: true,
                onSuccess: () => {
                    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
                }
            });
        }else{
            postLikeAction(route("post.unlike", id), {
                preserveScroll: true,
                onSuccess: () => {
                    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
                }
            });
        }
        
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
                        <div className="w-full flex justify-center items-center h-[1px] border-[1px] border-white my-4 rounded-3xl"></div>

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
                            <button type='button' className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <AiOutlineComment className="mr-2" /> Comment
                            </button>
                            <button type='button' className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                <AiOutlineShareAlt className="mr-2" /> Share
                            </button>
                        </div>
                        <p className="mb-4">Here you can add product information, pricing, etc.</p>
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