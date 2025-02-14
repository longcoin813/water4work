import React from "react";
import { useCartStore } from "./store/cartStore";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, image }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border p-4 rounded-md">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-red-500">${price}</p>
      <button
        onClick={() => addToCart({ id, name, price, quantity: 1 })}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
