import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) =>
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      return found
        ? prev.map((p) =>
            p.id === item.id ? { ...p, qty: p.qty + 1 } : p
          )
        : [...prev, { ...item, qty: 1 }];
    });

  const increase = (id) =>
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );

  const decrease = (id) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );

  const remove = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, remove }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
