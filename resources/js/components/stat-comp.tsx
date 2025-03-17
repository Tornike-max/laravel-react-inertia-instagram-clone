import React from 'react';

const StatComponent = ({ count = 0,title,children}:{count:number,title:string,children:React.ReactNode}) => {
  return (
    <div className='relative w-full dark:bg-neutral-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700'>
      <div className='absolute inset-0 flex flex-col justify-center items-center gap-3 p-4'>
        {/* Icon with a subtle hover effect */}
        <div className='p-3  dark:bg-neutral-700 rounded-full transition-transform duration-300 hover:scale-110'>
          {children}
        </div>

        {/* Count with a larger and bolder font */}
        <span className='text-4xl font-bold text-neutral-900 dark:text-neutral-100'>
          {count}
        </span>

        {/* Label with a smaller font and lighter weight */}
        <span className='text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider'>
          {title}
        </span>
      </div>
    </div>
  );
};

export default StatComponent;