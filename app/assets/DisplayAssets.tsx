import { assets } from "@/app/lib/example-data";

const DisplayAssets = ({ selectedCategory }: { selectedCategory: string }) => {
  const assetsToDisplay =
    selectedCategory.toLowerCase() === "all"
      ? assets
      : assets.filter(
          (item) => item.category === selectedCategory.toLowerCase()
        );

  return (
    <>
      {assetsToDisplay.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export default DisplayAssets;
