import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <ul className="flex gap-4 text-sm items-center">
        <li className="relative">
          <button
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => setOpen((prev) => !prev)}
          >
            Product <IoMdArrowDropdown />
          </button>
          {/* Dropdown Menu */}
          <ul
            className={`absolute left-0 top-full z-10 mt-2 w-40 text-sm space-y-2 rounded-md bg-base-100 p-2 shadow-lg transition-all duration-200 ${
              open ? "block" : "hidden"
            }`}
          >
            <li className="p-2 hover:bg-gray-200 cursor-pointer">product 1</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">product 2</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">product 3</li>
          </ul>
        </li>
        <li className="hover:text-primary cursor-pointer">Enterprise</li>
        <li className="hover:text-primary cursor-pointer">Resource</li>
        <li className="hover:text-primary cursor-pointer">Pricing</li>
      </ul>
    </div>
  );
};

export default Menu;
