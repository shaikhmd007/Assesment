import React, { useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (price) => {
    setCart([...cart, price]);
    setTotal(total + price);
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cart.map((price, index) => (
          <li key={index}>
            Item {index + 1}: ${price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={() => addToCart(10)}>Add to Cart ($10)</button>
      <button onClick={() => addToCart(20)}>Add to Cart ($20)</button>
    </div>
  );
};

export default CartPage;
