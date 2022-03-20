import React, { useState } from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import "./product.css";

const Product = ({ item }) => {
  const [showHide, setShowHide] = useState(0);

  const handleHover = (e) => {
    if (e === "show") {
      setShowHide(1);
    } else {
      setShowHide(0);
    }
  };

  const container = {
    flex: "1",
    margin: "5px",
    minWidth: "280px",
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fbfd",
    position: "relative",
  };

  const circle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "white",
    position: "absolute",
  };

  const img = {
    height: "70%",
    zIndex: "2",
  };

  const info = {
    opacity: `${showHide}`,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: "3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s ease",
    cursor: "pointer",
  };

  const icon = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    transition: "all 0.5s ease",
  };

  return (
    <div
      style={container}
      onMouseEnter={() => handleHover("show")}
      onMouseLeave={() => handleHover("hide")}
    >
      <div style={circle}></div>
      <img src={item.img} style={img} />
      <div style={info}>
        <div style={icon} className="productIcons">
          <ShoppingCartOutlined />
        </div>
        <div style={icon} className="productIcons">
          <SearchOutlined />
        </div>
        <div style={icon} className="productIcons">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
