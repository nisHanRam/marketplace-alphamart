"use client";
import { useState } from "react";
import AssetCategoriesDropdown from "../ui/assets/AssetCategoriesDropdown";
import ShowAssets from "./DisplayAssets";

const AssetsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="grid grid-cols-4 min-h-[calc(100vh-76px)]">
      <div className="col-span-1 p-4 border-r border-blue-50/10">
        <div className="space-y-2">
          <h2 className="text-base uppercase">Asset Category</h2>
          <AssetCategoriesDropdown
            selectedCategory={selectedCategory}
            onCategoryChange={(categorySelected: string) =>
              setSelectedCategory(categorySelected)
            }
          />
        </div>
      </div>
      <div className="col-span-3 p-4 grid grid-cols-3 gap-4">
        <ShowAssets selectedCategory={selectedCategory} />
      </div>
    </section>
  );
};

export default AssetsPage;
