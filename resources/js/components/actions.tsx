import { Post, PostItem } from "@/types";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

const Actions = ({ handleLike,toggleComments,post,user_id }: { handleLike: (post_id:number) => void,toggleComments:(post_id:number)=>void,post: PostItem,user_id:number}) => {
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleLike(post?.id);
        }} className="flex border-t border-neutral-100 dark:border-neutral-800 text-gray-500 dark:text-neutral-400 text-sm font-medium divide-x divide-neutral-100 dark:divide-neutral-800"> {/* Added dividers */}
            <button type='submit' className="flex-1 cursor-pointer flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <AiOutlineLike className="mr-2" /> {post.likes.some((like) => like.post_id === post?.id && like.user_id === user_id) ? processing ? "Wait" : "Unlike" : processing ? "Wait" : "Like"}
            </button>
            <button onClick={() => toggleComments(post?.id)} type='button' className="flex-1 cursor-pointer flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <AiOutlineComment className="mr-2" /> Comment
            </button>
            <button onClick={() => sharePost(post.id)} type='button' className="flex-1 cursor-pointer flex items-center justify-center py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <AiOutlineShareAlt className="mr-2" /> Share
            </button>
        </form>
    )
}

export default Actions