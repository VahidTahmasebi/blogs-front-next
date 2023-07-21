import { AdjustmentsIcon } from "@heroicons/react/outline";

const Sortbar = () => {
  return (
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
  );
};

export default Sortbar;
