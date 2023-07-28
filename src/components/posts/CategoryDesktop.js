import Link from "next/link";

import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

const CategoryDesktop = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      {/* accordion header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 bg-purple-200 cursor-pointer">
        <span>Category Blogs</span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* accordion content */}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Link href="/blogs">
          <a className="block mb-1 py-2 pl-4 hover:bg-purple-50">All Blogs</a>
        </Link>
        {postCategories.map((category) => {
          return (
            <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
              <a className="block mb-1 py-2 pr-4 hover:bg-purple-50">
                {category.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDesktop;
