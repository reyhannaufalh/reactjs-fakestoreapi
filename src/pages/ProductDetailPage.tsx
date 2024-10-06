import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/products/useProducts";

export const ProductDetailPage = () => {
  const params = useParams<{ id: string }>();

  const { product, loading } = useProduct(Number(params.id));

  if (loading) {
    return <p className="text-3xl text-white">Loading...</p>;
  }

  console.log(product);

  return (
    <div className="max-w-3xl pb-8 mx-auto text-white">
      <div className="object-contain w-full aspect-video">
        <img
          className="w-full h-full mx-auto"
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <div className="pt-6">
        <p className="text-sm text-neutral-300">{product?.category}</p>

        <h1 className="block my-3 text-lg font-semibold leading-tight hover:underline">
          {product?.title}
        </h1>

        <div>
          <p>{product?.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="text-2xl font-extrabold leading-tight">
            ${product?.price}
          </p>

          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
