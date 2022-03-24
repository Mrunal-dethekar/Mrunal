import React, { useState } from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import "./product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/action";

const container = {
  flex: "1",
  margin: "5px",
  minWidth: "280px",
  height: "350px",
  paddingTop: "10px",
  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f5fbfd",
  position: "relative",
};

const img = {
  height: "70%",
  zIndex: "2",
  maxWidth: "80%",
};

const heading6 = {
  textAlign: "center",
  position: "absolute",
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


const Product = ({ product }) => {

  const [showHide, setShowHide] = useState(0);

  const handleHover = (e) => {
    if (e === "show") {
      setShowHide(1);
    } else {
      setShowHide(0);
    }
  };

  const dispatch = useDispatch()

  const addProduct = (product)=>{
    dispatch(addToCart(product))
  }


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

  return (
    <div
      style={container}
      onMouseEnter={() => handleHover("show")}
      onMouseLeave={() => handleHover("hide")}
    >
      <img src={product.image} style={img} alt={product.title} />
      <h6 style={{ ...heading6, bottom: "10%" }}>
        {product.title.substring(0, 18)}...
      </h6>
      <h6 style={{ ...heading6, bottom: "1%", color: "teal" }}>
        ${product.price}
      </h6>

      <div style={info}>
        <div style={icon} className="productIcons" onClick={()=>addProduct(product)}>
          <ShoppingCartOutlined />
        </div>
        <div style={icon} className="productIcons">
          <Link to={`/products/${product.id}`} style={{ color: "black" }}>
            <SearchOutlined />
          </Link>
        </div>
        <div style={icon} className="productIcons">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
