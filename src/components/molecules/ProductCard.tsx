import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  gridCols?: string;
};

export default function ProductCard({
  id,
  title,
  price,
  category,
  description,
  image,
  gridCols = "col-span-12 md:col-span-6 lg:col-span-4",
}: ProductCardProps) {
  return (
    <Link
      to={`/products/${id}`}
      className={`rounded-lg border ${gridCols} text-white p-6 shadow-sm border-neutral-800 bg-neutral-900`}
    >
      <div className="w-full h-56">
        <img className="h-full mx-auto" src={image} alt={title} />
      </div>
      <div className="pt-6">
        <p className="text-sm text-neutral-300">{category}</p>

        <h1 className="block my-3 text-lg font-semibold leading-tight hover:underline">
          {title}
        </h1>

        <div className="line-clamp-3">
          <p>{description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="text-2xl font-extrabold leading-tight">${price}</p>

          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}
