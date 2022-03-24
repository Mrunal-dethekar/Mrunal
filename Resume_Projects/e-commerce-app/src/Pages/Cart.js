import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, DeleteItem } from "../redux/";

const wrapper = {
  padding: "20px",
};

const title = {
  fontWeight: "300",
  textAlign: "center",
};

const top = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
};

const topButton = {
  padding: "10px",
  fontWeight: "600",
  cursor: "pointer",
};

const topTexts = {};

const topText = {
  textDecoration: "underline",
  cursor: "pointer",
  margin: "0px 10px",
};

const bottom = {
  display: "flex",
  justifyContent: "space-between",
};

const info = {
  flex: "3",
};

const product = {
  display: "flex",
  justifyContent: "space-between",
};

const productDetail = {
  flex: "2",
  display: "flex",
};

const image = {
  width: "200px",
};

const details = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
};

const productName = {};

const productId = {};

const productColor = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
};

const priceDetail = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const productAmountContainer = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const productAmount = {
  fontSize: "24px",
  width: "30px",
  height: "30px",
  borderRadius: "10px",
  border: "1px solid teal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px 15px",
};

const productPrice = {
  fontSize: "30px",
  fontWeight: "200",
};

const hr = {
  backgroundColor: "#eee",
  border: "none",
  height: "1px",
};

const summary = {
  flex: "1",
  border: "0.5px solid lightgray",
  borderRadius: "10px",
  padding: "20px",
  height: "50vh",
};

const summaryTitle = {
  fontWeight: "200",
};

const summaryItem = {
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
};

const summaryItemText = {};

const summaryItemPrice = {};

const button = {
  width: "100%",
  padding: "10px",
  backgroundColor: "black",
  color: "white",
  fontWeight: "600",
};

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const [total,setTotal]=useState(0);

  const dispatch = useDispatch();

  const handleItem = (item, sign) => {
    if (sign === "+") {
      dispatch(addToCart(item));
    } else {
      dispatch(DeleteItem(item));
    }
  };

  useEffect(()=>{
    setTotal(state.reduce((total,e)=>(
      total+(e.price*e.quantity)
    ),0))
  })

  const CartItems = () => {
    return (
      <>
        {state.map((item) => (
          <>
            <div style={product}>
              <div style={productDetail}>
                <img style={image} src={item.image} />
                <div style={details}>
                  <span style={productName}>
                    <b>Product:</b> <span style={{fontSize:"1.2rem",fontWeight:"450"}}>{item.title}</span>
                  </span>
                  <span style={productId}>
                    <b>ID:</b> {item.id}
                  </span>
                  <div style={{ ...productColor, backgroundColor: "black" }} />
                </div>
              </div>
              <div style={priceDetail}>
                <div style={productAmountContainer}>
                  <Add
                    onClick={() => handleItem(item, "+")}
                    style={{ cursor: "pointer" }}
                  />
                  <div style={productAmount}>{item.quantity}</div>
                  <Remove
                    onClick={() => handleItem(item, "-")}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div style={productPrice}>${item.price*item.quantity}</div>
              </div>
            </div>
            <hr style={hr} />
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <div style={wrapper}>
        <h1 style={title}>YOUR BAG</h1>
        <div style={top}>
          <button style={topButton}>CONTINUE SHOPPING</button>
          <div style={topTexts}>
            <span style={topText}>Shopping Bag({state.length})</span>
            <span style={topText}>Your Wishlist (0)</span>
          </div>
          <button
            style={{
              ...topButton,
              border: "none",
              backgroundColor: `${
                "filled" === "filled" ? "black" : "transparent"
              }`,
              color: `${"filled" === "filled" && "white"}`,
            }}
          >
            CHECKOUT NOW
          </button>
        </div>
        <div style={bottom}>
          <div style={info}>
            <CartItems />
          </div>
          <div style={summary}>
            <h1 style={summaryTitle}>ORDER SUMMARY</h1>
            <div style={summaryItem}>
              <span style={summaryItemText}>Subtotal</span>
              <span style={summaryItemPrice}>$ {total.toFixed(2)}</span>
            </div>
            <div style={summaryItem}>
              <span style={summaryItemText}>Estimated Shipping</span>
              <span style={summaryItemPrice}>$ 5.90</span>
            </div>
            <div style={summaryItem}>
              <span style={summaryItemText}>Shipping Discount</span>
              <span style={summaryItemPrice}>$ -5.90</span>
            </div>
            <div
              style={{ ...summaryItem, fontWeight: "500", fontSize: "24px" }}
            >
              <span style={summaryItemText}>Total</span>
              <span style={summaryItemPrice}>$ {total.toFixed(2)}</span>
            </div>
            <button style={button}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
