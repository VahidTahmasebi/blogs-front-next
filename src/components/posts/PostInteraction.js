import {
  AnnotationIcon,
  BookmarkIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as SolidHeartIcon,
  BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/solid";

const PostInteraction = ({ post, isSmall }) => {
  const iconSize = `${isSmall ? "w-4 h-4" : "w-4 h-4"}`;

  return (
    <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-4 "}`}>
      <button className="flex items-center gap-x-1 p-0.5 rounded bg-gray-200">
        <AnnotationIcon className="w-4 h-4 stroke-gray-500" />
        <span className="text-xs font-bold text-gray-500 leading-3">
          {post.commentsCount}
        </span>
      </button>
      <button className="flex items-center gap-x-1 p-0.5 rounded text-red-500 hover:text-red-100 bg-red-200 hover:bg-red-500 transition-all">
        {post.isLiked ? (
          <SolidHeartIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stoke-current`} />
        )}

        <span className="text-xs font-bold text-red-500 leading-3">
          {post.likesCount}
        </span>
      </button>
      <button className="flex items-center gap-x-1 p-0.5 rounded text-blue-500 hover:text-white bg-blue-200 hover:bg-blue-500 transition-all">
        {post.isBookmark ? (
          <SolidBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stoke-current`} />
        )}
      </button>
    </div>
  );
};

export default PostInteraction;
