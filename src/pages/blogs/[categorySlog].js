import axios from "axios";

import PostList from "@/components/posts/PostList";
import CategoryMobile from "@/components/posts/CategoryMobile";
import Sortbar from "@/components/posts/SortBar";
import CategoryDesktop from "@/components/posts/CategoryDesktop";

import queryString from "query-string";

export default function categoryPage({ blogsData, postCategories }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <CategoryMobile postCategories={postCategories} />
        <div className="min-h-screen grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]">
          <div className="hidden md:block md:row-span-2 md:col-span-3">
            <CategoryDesktop postCategories={postCategories} />
          </div>

          <div className="hidden md:block md:col-span-9">
            <Sortbar />
          </div>

          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            <PostList blogsData={blogsData.docs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, query } = context;
  // const { data: result }  = await axios.get(
  //   `http://localhost:5000/api/posts?limit=6&page=1&categorySlug=${params.categorySlug}`
  // );

  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );

  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/posts-category"
  );

  const { data } = result;

  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data,
    },
  };
}
