const CommentForm = ({ commentValue, setCommentValue }) => {
  return (
    <form>
      <textarea
        value={commentValue}
        placeholder="type comment..."
        onChange={(e) => setCommentValue(e.target.value)}
        className="w-full my-4 p-4 border-none rounded ring-2 focus:ring-2 ring-gray-300 focus:ring-purple-700 focus:outline-none shadow-sm"
      />
      <button className="w-full sm:w-56 mt-4 mx-auto py-3 px-3 rounded-xl md:text-lg text-white bg-violet-700">
        Send comment
      </button>
    </form>
  );
};

export default CommentForm;
