import { ProductCard } from "../Components";
import { products } from "../constants";
import { Product } from "../types";

const PopularProducts = () => {
  return (
    <div className="mx-auto mt-20 flex w-[95%] flex-col items-start justify-start px-1 lg:mt-24 lg:w-[90%] lg:px-2">
      <h1 className="font-noto-Sans px-4 text-[35px] font-bold leading-normal sm:text-[40px] xl:text-5xl">
        Our
        <span className="mx-[10px] text-blue-800/90">Popular</span>
        Products
      </h1>
      <p className="text-md  mb-14 mt-6 w-full px-4 py-1 leading-normal text-slate-600 lg:w-3/5">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="flex w-full flex-row flex-wrap items-center justify-start gap-8 px-4">
        {products.map((product: Product, i: number) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
