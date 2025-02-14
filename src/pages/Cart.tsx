import React from "react";
import { useCartStore } from "./store/cartStore";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="bg-gray-200 px-2 py-1 mx-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 mx-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 ml-4"
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mt-4">Total: ${getTotalPrice()}</h2>
          <button
            onClick={clearCart}
            className="bg-gray-500 text-white px-4 py-2 mt-4"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
