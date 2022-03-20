import React from "react";

const CategoriesItem = ({ item }) => {
  const container = {
    flex: "1",
    margin: "3px",
    height: "70vh",
    position: "relative",
  };

  const info = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const img = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const title = {
    color: "white",
    margin: "20px",
  };

  const button = {
    border: "none",
    padding: "10px",
    backgroundColor: "white",
    cursor: "pointer",
    color: "gray",
    fontWeight: "600",
  };

  return (
    <div style={container}>
      <img src={item.img} style={img} />
      <div style={info}>
        <h1 style={title}>{item.title}</h1>
        <button style={button}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoriesItem;
