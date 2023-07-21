const PostList = ({ blogsData }) => {
  console.log(blogsData);
  return blogsData.docs.map((blog, index) => {
    return (
      <div
        key={index}
        className="flex flex-col col-span-6 md:col-span-3 lg:col-span-2 p-2 rounded-3xl bg-white">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={blog.coverImage}
            alt=""
            className="w-full h-full rounded-2xl object-center object-cover"
          />
          <span className="text-sm">Vahid Tahmasebi</span>
        </div>

        <div className="w-full flex flex-col justify-between flex-1 p-2 rounded-2xl bg-gray-50">
          <h2 className="mb-4 font-bold">{blog.title}</h2>
          <div>??</div>
        </div>
        <span className="py-1 px-2 rounded-xl text-xs text-blue-600 bg-blue-100 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">
          {blog.category.englishTitle}
        </span>
      </div>
    );
  });
};

export default PostList;
