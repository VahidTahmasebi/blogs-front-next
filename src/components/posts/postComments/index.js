import React, { useState } from "react";

import SingleComment from "./singleComment";
import CommentForm from "./CommentForm";

const PostComments = ({ post }) => {
  const [commentValue, setCommentValue] = useState();

  return (
    <div>
      <h2>comments</h2>
      {post.PostComments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SingleComment comment={comment} />
            </React.Fragment>
          )
        );
      })}

      <div className="mt-8">
        <span className="md:text-lg font-bold">Send new comment</span>
        <CommentForm
          commentValue={commentValue}
          setCommentValue={setCommentValue}
        />
      </div>
    </div>
  );
};

export default PostComments;
