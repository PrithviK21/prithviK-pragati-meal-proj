import { createContext, useContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  const addToCart = (item) => {
    const newCart = [...cart, item];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.idMeal !== item.idMeal);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCartData = () => useContext(cartContext);
export default useCartData;
