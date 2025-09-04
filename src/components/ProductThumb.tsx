import { Product } from "../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
function ProductThumb({ productThumb }: { productThumb: Product }) {
  return (
    <div className="w-[23%] min-w-[250px] px-2.5 py-3 border border-[#cce7d0]">
      <div className="w-[100%] relative aspect-square">
        {productThumb.image && (
          <Image
            src={urlFor(productThumb.image).url()}
            alt={productThumb.name ?? "Product Image"}
            fill
            className="rounded-[20px]"
          />
        )}
      </div>
      <p>{productThumb.price}</p>
    </div>
  );
}

export default ProductThumb;
