import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  const container = {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "center",
  };

  return (
    <div style={container}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
