import Link from "next/link";

const CategoryMobile = ({ postCategories }) => {
  return (
    <div className="flex md:hidden gap-x-4 pb-5 overflow-auto">
      {postCategories.map((category) => {
        return (
          <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
            <a className="block py-1 px-3 border border-gray-400 rounded-3xl text-gray-500 bg-white text-sm whitespace-nowrap">
              {category.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryMobile;
