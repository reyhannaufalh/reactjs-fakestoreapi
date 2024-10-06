import { useSelector } from "react-redux";
import ProductCard from "../components/molecules/ProductCard";
import { useGetProducts } from "../hooks/products/useProducts";
import { RootState } from "../redux/store";

export default function App() {
  const sort = useSelector((state: RootState) => state.sort.sort);
  const { products, loading } = useGetProducts(sort);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="grid w-full grid-cols-12">
      <section className="col-span-12 p-8">
        <div className="grid grid-cols-12 gap-4">
          {!loading ? (
            products.length > 0 &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
                image={product.image}
              />
            ))
          ) : (
            <p className="text-2xl font-semibold text-white">Loading...</p>
          )}
        </div>
      </section>
    </main>
  );
}
