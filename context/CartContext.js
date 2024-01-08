import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartStore, setCartStore] = useState([]);

  const addToCart = (item) => {
    let itemExists = cartStore.filter((prod) => prod.title === item.title);
    if (itemExists.length > 0) {
      let newItemsList = cartStore.map((prod) =>
        prod.title === item.title ? { ...prod, qty: prod.qty + 1 } : prod
      );
      setCartStore(newItemsList);
    } else {
      setCartStore([...cartStore, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    if (item.qty == 1) {
      let newItemsList = cartStore.filter((prod) => prod.title !== item.title);
      setCartStore(newItemsList);
    } else {
      let newItemsList = cartStore.map((prod) =>
        prod.title === item.title ? { ...prod, qty: prod.qty - 1 } : prod
      );
      setCartStore(newItemsList);
    }
  };

  const totalPrice = cartStore.reduce(
    (acc, item) => acc + item.price * 100 * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartStore, addToCart, totalPrice, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
