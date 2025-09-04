import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "@/components/ProductsView";

export default async function Home() {
  const Products = await getAllProducts();
  const Categories = await getAllCategories();

  return (
    <div>
      <div className="">
        <ProductsView products={Products} categories={Categories} />
      </div>
    </div>
  );
}
