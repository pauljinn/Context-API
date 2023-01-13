import React, { useState } from "react";
import { cartContext } from "../Context";
import { useContext, useEffect } from "react";
import Product from "./Product";
const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0.0);
  console.log(cart);
  useEffect(() => {
    const sum = 0.0;
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span>
        <h1>Total {total}</h1>
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
        className="container"
      >
        {cart.map((prod) => {
          return <Product prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
