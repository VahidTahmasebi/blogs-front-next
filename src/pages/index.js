import { useState } from "react";
import Link from "next/link";

import { AdjustmentsIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function Home() {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="min-h-screen grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] bg-gray-100">
      <div className="hidden md:block md:row-span-2 md:col-span-3">
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
            <Link href="#">
              <a className="block mb-1 py-2 pl-4 hover:bg-purple-50">
                All Blogs
              </a>
            </Link>
            <Link href="#">
              <a className="block mb-1 py-2 pl-4 hover:bg-purple-50">React</a>
            </Link>
            <Link href="#">
              <a className="block py-2 pl-4 hover:bg-purple-50">JS</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:col-span-9">
        <div className="flex items-center rounded-3xl px-4 bg-white">
          <div className="flex items-center gap-x-2 mr-4">
            <AdjustmentsIcon className="w-6 h-6" />
            <span className="text-gray-700">Sort by:</span>
          </div>
          <ul className="flex items-center gap-x-4">
            <li className="py-4 text-gray-700 cursor-pointer">Views</li>
            <li className="py-4 text-gray-700 cursor-pointer">Like</li>
            <li className="py-4 text-gray-700 cursor-pointer">New</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-200 md:col-span-9">Blogs</div>
    </div>
  );
}
