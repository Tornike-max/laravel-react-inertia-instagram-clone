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

export interface Post{
    id: number;
    title: string;
    content: string;
    user_id: number;
    user:User;
    slug: string;
    image: string;
    published_at: string;
    created_at: string;
    updated_at: string;
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
    [key: string]: unknown; // This allows for additional properties...
}
