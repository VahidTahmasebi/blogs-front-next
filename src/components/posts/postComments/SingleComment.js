import { useState } from "react";

import { UserCircleIcon, UserIcon } from "@heroicons/react/outline";

import toLocalDate from "@/utils/toLocalDate";

import CommentForm from "./CommentForm";

const SingleComment = ({ comment }) => {
  const [onReplay, setOnReplay] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  return (
    <div className="mb-8 p-4 border border-gray-300 rounded-xl">
      <div className="flex justify-start items-center">
        <UserCircleIcon className="w-12 h-12 stroke-gray-400" />
        <div className="flex flex-col justify-between mr-4">
          <span className="block text-sm text-gray-500">
            {comment.writer?.name}
          </span>
          <span className="block mt-2 text-sm text-gray-500 dark:text-slate-500">
            {toLocalDate(comment.createdAt)}
          </span>
        </div>
      </div>
      <div className="mt-4 leading-10">{comment.content}</div>

      <button
        onClick={() => setOnReplay(!onReplay)}
        className="p-4 text-sm text-blue-600 cursor-pointer">
        {!onReplay ? "Answer to" : "Cancel"}
      </button>

      {onReplay && (
        <div className="mt-8">
          <span className="text-sm text-gray-500">
            Responding to {commentValue.writer?.name}
          </span>

          <CommentForm
            commentValue={commentValue}
            setCommentValue={setCommentValue}
          />
        </div>
      )}
    </div>
  );
};

export default SingleComment;
