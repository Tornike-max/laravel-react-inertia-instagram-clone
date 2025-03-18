import { Link } from '@inertiajs/react';
import React from 'react';

const StatComponent = ({ count = 0,title,url,children}:{count:number,title:string,url:string,children:React.ReactNode}) => {
  return (
    <Link href={url} as='button' className='w-full h-full m-auto rounded-xl shadow-md hover:shadow-lg border border-neutral-300 dark:border-neutral-700 transition-all duration-300 hover:scale-[1.03] bg-white dark:bg-neutral-800 p-5'>
        <div className='p-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center'>
            {children}
        </div>

        <div className='mt-4 text-center'>
            <span className='text-5xl font-extrabold text-neutral-900 dark:text-neutral-100 block'>
                {count}
            </span>
            <span className='text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide'>
                {title}
            </span>
        </div>
    </Link>
);

};

export default StatComponent;