import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show',
        href: '/post/show',
    },
];

const post = {
    id: 4,
    user_id: 2,
    title: "Magnam dolor molestiae voluptatum deserunt consequatur repudiandae.",
    content: "Sequi eos nobis et omnis doloremque consequatur. Inventore libero nesciunt et ut minus alias explicabo. Impedit quis eaque minus voluptatibus qui.",
    image: "https://via.placeholder.com/640x480.png/009944?text=nisi",
    slug: "optio-rem-possimus-amet-praesentium-ut-cum-cum-et",
    published: 1,
    published_at: "1986-08-24 11:27:52",
    created_at: "2025-03-18 13:43:57",
    updated_at: "2025-03-18 13:43:57"
};

const Show = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={post.title} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 bg-gray-900 text-gray-100 shadow-lg">
            <div className="relative z-10" role="dialog" aria-modal="true">
  {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
                <div className="fixed inset-0 hidden bg-gray-500/75 transition-opacity md:block" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    {/* <!--
                        Modal panel, show/hide based on modal state.

                        Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        To: "opacity-100 translate-y-0 md:scale-100"
                        Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 md:scale-100"
                        To: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    --> */}
                    <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
                            <span className="sr-only">Close</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5" />
                            <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>

                            <section aria-labelledby="information-heading" className="mt-2">
                                <h3 id="information-heading" className="sr-only">Product information</h3>

                                <p className="text-2xl text-gray-900">$192</p>

                                {/* <!-- Reviews --> */}
                                <div className="mt-6">
                                <h4 className="sr-only">Reviews</h4>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                    {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                                    <svg className="size-5 shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                                    </svg>
                                    <svg className="size-5 shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                                    </svg>
                                    <svg className="size-5 shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                                    </svg>
                                    <svg className="size-5 shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                                    </svg>
                                    <svg className="size-5 shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                                    </svg>
                                    </div>
                                    <p className="sr-only">3.9 out of 5 stars</p>
                                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                                </div>
                                </div>
                            </section>

                            <section aria-labelledby="options-heading" className="mt-10">
                                <h3 id="options-heading" className="sr-only">Product options</h3>

                                <form>
                                {/* <!-- Colors --> */}
                                <fieldset aria-label="Choose a color">
                                    <legend className="text-sm font-medium text-gray-900">Color</legend>

                                    <div className="mt-4 flex items-center gap-x-3">
                                    {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                                    <label aria-label="White" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                                        <input type="radio" name="color-choice" value="White" className="sr-only" />
                                        <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-white"></span>
                                    </label>
                                    {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                                    <label aria-label="Gray" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                                        <input type="radio" name="color-choice" value="Gray" className="sr-only" />
                                        <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-gray-200"></span>
                                    </label>
                                    {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                                    <label aria-label="Black" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-hidden">
                                        <input type="radio" name="color-choice" value="Black" className="sr-only" />
                                        <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-gray-900"></span>
                                    </label>
                                    </div>
                                </fieldset>

                                {/* <!-- Sizes --> */}
                                <fieldset className="mt-10" aria-label="Choose a size">
                                    <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-gray-900">Size</div>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                    </div>

                                    <div className="mt-4 grid grid-cols-4 gap-4">
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="XXS" className="sr-only" />
                                        <span>XXS</span>
                                        {/* <!--
                                        Active: "border", Not Active: "border-2"
                                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                                        --> */}
                                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                    </label>
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="XS" className="sr-only" />
                                        <span>XS</span>
                                        {/* <!--
                                        Active: "border", Not Active: "border-2"
                                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                                        --> */}
                                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                    </label>
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="S" className="sr-only" />
                                        <span>S</span>
                                        {/* <!--
                                        Active: "border", Not Active: "border-2"
                                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                                        --> */}
                                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                    </label>
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="M" className="sr-only" />
                                        <span>M</span>
                                        {/* <!--
                                        Active: "border", Not Active: "border-2"
                                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                                        --> */}
                                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                    </label>
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="L" className="sr-only" />
                                        <span>L</span>
                                        {/* <!--
                                        Active: "border", Not Active: "border-2"
                                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                                        --> */}
                                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                    </label>
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="XL" className="sr-only" />
                                        <span>XL</span>
                                        {/* <!--
                                        Active: "border", Not Active: "border-2"
                                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                                        --> */}
                                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                    </label>
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="XXL" className="sr-only" />
                                        <span>XXL</span>
                                        {/* <!--
                                        Active: "border", Not Active: "border-2"
                                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                                        --> */}
                                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                    </label>
                                    {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                                    <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium text-gray-200 uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                                        <input type="radio" name="size-choice" value="XXXL" disabled className="sr-only" />
                                        <span>XXXL</span>
                                        <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                        <svg className="absolute inset-0 size-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                            <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                        </svg>
                                        </span>
                                    </label>
                                    </div>
                                </fieldset>

                                <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Add to bag</button>
                                </form>
                            </section>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Show;
