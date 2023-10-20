import { useLoaderData } from "react-router";
import BrandCard from "./BrandCard";

const Brands = () => {
  const brands = useLoaderData();

  return (
    <div className="my-32">
    <div>
        <h2 className="text-4xl text-center font-bold mb-12">Most Popular brands </h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
