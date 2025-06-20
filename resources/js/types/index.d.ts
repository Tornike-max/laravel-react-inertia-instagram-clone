import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}


  
  
  export interface PostItem {
    id: number;
    title: string;
    content: string;
    image: string;
    slug: string;
    user_id: number;
    likes: Like[];
    comments: Comment[];
    user: User;
    commentsCount: number;
    likesCount: number;
    published: number;
    published_at: string;
    updated_at: string;
    created_at: string;
  }
  
  export interface Post {
    data: PostItem[];
  }

  export interface Like{
    post_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    id: number;
  }
  
  

export interface Comment {
    id: number;
    comment: string;
    created_at: string;
    updated_at: string;
    post_id: number;
    user_id: number;
    // Relationships
    post?: Post;
    user?: User;
  }

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    likes:Array;
    [key: string]: unknown; // This allows for additional properties...
}
