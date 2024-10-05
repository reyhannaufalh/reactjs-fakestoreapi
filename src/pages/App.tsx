import { useEffect, useState } from "react";
import ProductCard from "../components/molecules/ProductCard";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <div className="grid grid-cols-12 gap-4">
      {products.length > 0 &&
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
        ))}
    </div>
  );
}
