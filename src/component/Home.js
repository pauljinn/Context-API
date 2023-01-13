import React, { useState } from "react";
import * as faker from "faker";
import Product from "./Product";

// To generate one type of data using faker
faker.seed(100);

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid,
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  const [products, setProducts] = useState(productsArray);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return <Product prod={product} key={product.productName} />;
      })}
    </div>
  );
};

export default Home;
