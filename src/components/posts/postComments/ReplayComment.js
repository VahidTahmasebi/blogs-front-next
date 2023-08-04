import React from "react";

import SingleComment from "./singleComment";

const ReplayComment = ({ comments, parentCommentId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="ml-5">
          <React.Fragment key={comment._id}>
            <SingleComment comment={comment} />
            <ReplayComment comments={comments} parentCommentId={comment._id} />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplayComment;
