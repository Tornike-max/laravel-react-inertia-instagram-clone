import StatComponent from '@/components/stat-comp';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Post, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CiSignpostDuo1 } from 'react-icons/ci';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function Index({posts}:{posts:Post[]}) {
    const { auth } = usePage<SharedData>().props;
    

    console.log(posts,auth)
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Index" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                    {posts.length > 0 
                    ? 
                    <StatComponent count={posts.length} title='Posts'>
                              <CiSignpostDuo1 className="text-3xl text-neutral-900 dark:text-neutral-100" />
                    </StatComponent> 
                    : 
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    }
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                    {posts.length > 0 
                    ? 
                    <StatComponent count={posts.length} title='Posts'>
                              <CiSignpostDuo1 className="text-3xl text-neutral-900 dark:text-neutral-100" />
                    </StatComponent> 
                    : 
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    }                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                    {posts.length > 0 
                    ? 
                    <StatComponent count={posts.length} title='Posts'>
                              <CiSignpostDuo1 className="text-3xl text-neutral-900 dark:text-neutral-100" />
                    </StatComponent> 
                    : 
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    }                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
