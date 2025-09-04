"use client";
import { Product } from "../../sanity.types";
import ProductThumb from "./ProductThumb";

function ProductsGrid({ productGrid }: { productGrid: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {productGrid.map((Product) => {
        return <ProductThumb key={Product._id} productThumb={Product} />;
      })}
    </div>
  );
}

export default ProductsGrid;
