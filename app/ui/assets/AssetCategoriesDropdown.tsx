"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { categories } from "@/app/lib/example-data";

const AssetCategoriesDropdown = ({
  selectedCategory,
  onCategoryChange,
}: {
  selectedCategory: string;
  onCategoryChange: (param: string) => void;
}) => {
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-blue-50/5 flex justify-between items-center rounded-sm px-4 py-2 cursor-pointer hover:bg-blue-50/10 transition"
        onClick={() => setSelectOpen(!selectOpen)}
      >
        <span className="selected">{selectedCategory}</span>
        <div
          className={cn(
            selectOpen && "rotate-180",
            "border-x-4 border-x-transparent border-t-8 border-t-blue-50 transition"
          )}
        ></div>
      </div>
      <ul
        className={cn(
          selectOpen ? "opacity-100 block" : "opacity-0 hidden",
          "absolute bg-blue-50/5 list-none rounded-sm top-[60px] left-[50%] w-full h-[260px] overflow-y-scroll translate-x-[-50%] transition z-[1]"
        )}
      >
        {categories.map((item) => (
          <li
            key={item.id}
            value={item.name.toLowerCase()}
            className={cn(
              selectedCategory === item.name && "bg-blue-50/5",
              "px-4 py-2 rounded-sm cursor-pointer hover:bg-blue-50/5"
            )}
            onClick={() => {
              onCategoryChange(item.name);
              setSelectOpen((prev) => !prev);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetCategoriesDropdown;
