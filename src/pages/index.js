import { useState } from "react";
import Link from "next/link";

import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Home() {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 min-h-screen bg-gray-100">
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
      <div className="bg-blue-200 hidden md:block md:col-span-9">
        Sort desktop
      </div>
      <div className="bg-blue-200 md:col-span-9">Blogs</div>
    </div>
  );
}
