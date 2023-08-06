import Link from "next/link";

import { ClockIcon } from "@heroicons/react/outline";

import PostInteraction from "./PostInteraction";

const PostList = ({ blogsData }) => {
  return blogsData.map((blog, index) => {
    return (
      <div
        key={index}
        className="max-h-[360px] flex flex-col col-span-6 md:col-span-3 lg:col-span-2 p-2 rounded-3xl bg-white">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={blog.coverImage}
            alt=""
            className="w-full h-full rounded-2xl object-center object-cover"
          />
          <span className="text-sm">Vahid Tahmasebi</span>
        </div>

        <div className="w-full flex flex-col justify-between flex-1 p-2 rounded-2xl bg-gray-50">
          <Link href={`/posts/${blog.hashedId}/${blog.slug}`}>
            <a>
              <h2 className="mb-4 font-bold">{blog.title}</h2>
            </a>
          </Link>
          <div>
            <div className="flex justify-center items-center mb-4">
              <div className="flex items-center">
                <Link href={`/posts/${blog.hashedId}/${blog.slug}`}>
                  <a>
                    <img
                      src="/public/images/vahid.jpg"
                      alt=""
                      className="w-6 h-6 ml-2 rounded-full ring-2 ring-white"
                    />
                  </a>
                </Link>
                <span className="text-sm font-bold text-gray-500">
                  {blog.author.name}
                </span>
              </div>

              <Link href={`blogs/${blog.category.englishTitle}`}>
                <a>
                  <span className="py-1 px-2 rounded-xl text-xs text-blue-600 bg-blue-100 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                    {blog.category.title}
                  </span>
                </a>
              </Link>
            </div>

            <div className="flex justify-between items-center">
              <PostInteraction post={blog} isSmall />
              <div className="flex items-center text-[10px] font-bold text-gray-400">
                <ClockIcon className="w-4 h-4 ml-1 stroke-gray-400" />
                <span className="ml-1"></span>
                <span className="ml-1 leading-3">{blog.readingTime}</span>
                <span>min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
