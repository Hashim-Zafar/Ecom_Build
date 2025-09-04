import { Product, Category } from "../../sanity.types";
import ProductsGrid from "./ProductsGrid";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

function ProductsView({ products, categories }: ProductsViewProps) {
  return (
    <div>
      <ProductsGrid productGrid={products} />
    </div>
  );
}

export default ProductsView;
