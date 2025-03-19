import StatComponent from '@/components/stat-comp';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Post, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CiSignpostDuo1 } from 'react-icons/ci';
import { AiOutlineLike } from "react-icons/ai";
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
                    <button className='py-2 px-3 border-b hover:border-indigo-500 duration-200 transition-all cursor-pointer'>Create Post</button>
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
                {posts.length > 0 
                ? 
                    <div className="grid grid-cols-1 gap-4 p-4">
                        {posts.map((post) => (
                            <div key={post.id} className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                <div className="p-4 w-full h-full flex flex-col gap-4">
                                    <div className='w-full flex justify-end items-center'>
                                        <span className='text-slate-300 text-sm'>{post.published_at}</span>
                                    </div>
                                    <img className='w-full flex justify-center items-center object-cover h-full' src={post.image} alt='Image'/>
                                    <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{post.title}</h2>
                                    <p className="text-neutral-500 dark:text-neutral-400">{post.content}</p>
                                </div>
                            </div>
                        ))} 
                        </div>
               : 
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                }
                </div>
            </div>
        </AppLayout>
    );
}
