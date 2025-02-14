import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-red-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Home;
