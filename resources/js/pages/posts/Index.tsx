import StatComponent from '@/components/stat-comp';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Post, SharedData, type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { CiSignpostDuo1 } from 'react-icons/ci';
import { AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useState } from 'react';
import ModalComponent from '@/components/modal';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];



export default function Index({posts}:{posts:Post[]}) {
    const { auth } = usePage<SharedData>().props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    console.log(posts,auth)
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Index" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                    {posts.length > 0 
                    ? 
                    <StatComponent count={posts.length} title='Posts' url='/posts'>
                            <CiSignpostDuo1 className="text-3xl text-neutral-900 dark:text-neutral-100" />
                    </StatComponent> 
                    : 
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    }
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                    {posts.length > 0 
                    ? 
                    <StatComponent count={posts.length} title='Likes' url='/likes'>
                            <AiOutlineLike className="text-3xl text-neutral-900 dark:text-neutral-100" />
                    </StatComponent> 
                    : 
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    }                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                    {posts.length > 0 
                    ? 
                    <StatComponent count={posts.length} title='Friends' url='/friends'>
                              <LiaUserFriendsSolid className="text-3xl text-neutral-900 dark:text-neutral-100" />
                    </StatComponent> 
                    : 
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    }                   
                     </div>
                </div>
                <div className='w-full flex justify-start items-center gap-4'>
                    <button className='py-2 px-3 border-b hover:border-indigo-500 duration-200 transition-all cursor-pointer' onClick={()=>handleOpen()}>Create Post</button>
                    <button className='py-2 px-3 border-b hover:border-indigo-500 duration-200 transition-all cursor-pointer'>Photos</button>
                    <button className='py-2 px-3 border-b hover:border-indigo-500 duration-200 transition-all cursor-pointer'>About</button>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <button onClick={handleOpen} className='py-2 px-3 border border-neutral-200 dark:border-neutral-700 rounded-xl w-full flex justify-start items-center text-neutral-500 cursor-pointer hover:border-neutral-200 dark:hover:border-neutral-600 duration-200 transition-all'>
                        <span>What's on your mind?</span>
                    </button>
                    <ModalComponent open={open} handleClose={handleClose} />
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 p-4 md:gap-8"> {/* Increased gap */}
                            {posts.map((post) => (
                                <Link href={route('post.show', post.id)}
                                    key={post.id} 
                                    className="bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg" 
                                >
                                    {/* Post Header */}
                                    <div className="flex items-center p-4 border-b border-neutral-100 dark:border-neutral-800"> 
                                        <img 
                                            src={"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg"} 
                                            alt={post.user.name}
                                            className="w-10 h-10 rounded-full mr-3 border-2 border-indigo-500" 
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-neutral-100">
                                                {post.user.name}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-neutral-400">
                                                {new Date(post.created_at).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <p className="text-gray-800 dark:text-neutral-200 mb-4 whitespace-pre-line">
                                            {post.content}
                                        </p>
                                    </div>

                                    {post.image && (
                                        <div className="border-y border-neutral-100 dark:border-neutral-800">
                                            <img 
                                                src={"https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg"} 
                                                alt={post.title}
                                                className="w-full max-h-[600px] object-cover" 
                                            />
                                        </div>
                                    )}

                                    {/* Post Stats */}
                                    <div className="px-4 py-2 border-t border-neutral-100 dark:border-neutral-800 text-sm text-gray-500 dark:text-neutral-400">
                                        <div className="flex items-center gap-6">
                                            <span>10 likes</span>
                                            <span>5 comments</span>
                                            <span>2 shares</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex border-t border-neutral-100 dark:border-neutral-800 text-gray-500 dark:text-neutral-400 text-sm font-medium divide-x divide-neutral-100 dark:divide-neutral-800"> {/* Added dividers */}
                                        <button type='button' className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                            <AiOutlineLike className="mr-2" /> Like
                                        </button>
                                        <button type='button' className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                            <AiOutlineComment className="mr-2" /> Comment
                                        </button>
                                        <button type='button' className="flex-1 flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                            <AiOutlineShareAlt className="mr-2" /> Share
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
