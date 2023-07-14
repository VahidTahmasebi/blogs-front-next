import { useState } from "react";
import Link from "next/link";

import { AdjustmentsIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function Home() {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="min-h-screen grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]">
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
                  <a className="block mb-1 py-2 pl-4 hover:bg-purple-50">
                    React
                  </a>
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
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col col-span-6 md:col-span-3 lg:col-span-2 p-2 rounded-3xl bg-white">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src="/public/images/reactjs.png"
                      alt=""
                      className="w-full h-
                      full rounded-2xl object-center object-cover"
                    />
                    <span className="text-sm">Vahid Tahmasebi</span>
                  </div>

                  <div className="w-full flex flex-col justify-between flex-1 p-2 rounded-2xl bg-gray-50">
                    <h2 className="mb-4 font-bold">
                      بررسی کامل ری اکت و ریداکس
                    </h2>
                    <div>??</div>
                  </div>
                  <span className="py-1 px-2 rounded-xl text-xs text-blue-600 bg-blue-100 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                    React
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
