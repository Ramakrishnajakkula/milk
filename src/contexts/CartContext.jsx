import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const toggleLiked = (product) => {
    setLikedItems((prevLiked) => {
      const isLiked = prevLiked.find(
        (item) => item.id === product.id && item.type === product.type
      );
      if (isLiked) {
        return prevLiked.filter(
          (item) => !(item.id === product.id && item.type === product.type)
        );
      }
      return [...prevLiked, product];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        likedItems,
        addToCart,
        removeFromCart,
        toggleLiked,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
