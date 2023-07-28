import axios from "axios";

import { BookmarkIcon, LinkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

import PostInteraction from "@/components/posts/PostInteraction";

const PostPage = ({ post }) => {
  console.log(post);
  return (
    <div className="h-screen bg-gray-50">
      <div className="max-w-screen-lg container mx-auto">
        <header className="flex flex-col md:flex-row md:justify-between md:items-start gap-y-5 mx-auto mb-12">
          <div className="flex items-stretch">
            <img
              src="/public/images/nextjs.png"
              alt={post.author.name}
              className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white"
            />
          </div>

          <div className="flex flex-col justify-between mr-4">
            <span className="hidden md:block font-normal text-xs">
              {post.author.biography}
            </span>
            <div className="font-normal text-sm text-gray-400">
              <span>{new Date(post.createdAt).toLocalDateString("en-us")}</span>
              <span className="mx-1">&bull;</span>
              <span>
                <span>Read</span>
                <span>{post.readingTime}</span>
                <span>min </span>
              </span>
            </div>
          </div>
          <div className="flex">
            <button>
              <LinkIcon className="w-6 h-6 text-gray-500 hover:text-black cursor-pointer" />
            </button>
            <button className="flex items-center mr-4 py-1 px-3 border rounded-full border-gray-300 text-gray-500 hover:text-gray-600">
              <span className="ml-1 text-xs">
                {post.isBookmarked ? "save" : "saved"}
              </span>
              {post.isBookmarked ? (
                <SolidBookmarkIcon classNamew="6 h-6 fill-current" />
              ) : (
                <BookmarkIcon className="w-6 h-6 fill-current" />
              )}
            </button>
          </div>
        </header>
        <main className="mb-8 prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl prose-h1:font-black prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl prose-a:text-blue-500">
          <h1>{post.title}</h1>
          <h2>subject</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non
            nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
            scelerisque fermentum. Odio ut enim blandit volutpat maecenas
            volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi
            vitae suscipit tellus mauris a diam maecenas sed. Placerat duis
            ultricies lacus sed turpis tincidunt id aliquet.
          </p>

          <img src={post.coverImage} alt="" />
          <h2> subject 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non
            nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
            scelerisque fermentum. Odio ut enim blandit volutpat maecenas
            volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi
            vitae suscipit tellus mauris a diam maecenas sed. Placerat duis
            ultricies lacus sed turpis tincidunt id aliquet.
          </p>

          <h2>Tailwind</h2>
          <p>
            Lorem <a href="https://hightlightjs.org/">highlight.js</a>
          </p>
          <p>
            lorem text <code>tailwind.config.js</code>
          </p>
          <pre>
            {`module.exports = {
                    purge: [],
                    theme:{
                        extend: {},
                    },
                    variants: {},
                    plugins: [],
                }`}
          </pre>
        </main>

        <section>
          <ul className="flex items-center flex-wrap gap-x-4">
            {[1, 2, 3].map((tag, index) => {
              return (
                <li
                  key={index}
                  className="block mb-3 py-1 px-3 rounded-2xl text-sm text-gray-600 hover:bg-gray-100 transition-all cursor-pointer">
                  {tag}
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-8">
            <PostInteraction
              post={blog}
              className="w-full justify-evenly md:w-auto"
            />
            <div className="w-full flex justify-evenly items-center gap-x-3 md:gap-x-4 md:w-auto">
              <a
                target="_blank"
                rel="noreferrer"
                className="block"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hasId}/${post.slug}}
`}>
                <IoLogoLinkedin
                  size={30}
                  className="fill-slate-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="block"
                href={`https://www.twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hasId}/${post.slug}}
`}>
                <IoLogoTwitter
                  size={24}
                  className="fill-slate-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="block"
                href={`https://www.telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hasId}/${post.slug}&text=${post.title}}
`}>
                <FaTelegram
                  size={30}
                  className="fill-slate-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostPage;

export async function getServeSideProps(ctx) {
  const { query } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);
  return {
    props: {
      post: data.data,
    },
  };
}
