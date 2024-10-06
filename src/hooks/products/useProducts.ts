import { useState, useEffect } from "react";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export const useGetProducts = (sort: string = "all") => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const url =
        sort === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products?sort=${sort}`;
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [sort]);

  return { products, loading };
};

export const useProduct = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return { product, loading };
};
