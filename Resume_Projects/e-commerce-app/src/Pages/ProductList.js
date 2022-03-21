import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const container = {};

const title = {
  margin: "20px",
};

const filterContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const filter = {
  margin: "20px",
};

const filterText = {
  fontSize: "20px",
  fontWeight: "600",
  marginRight: "20px",
};

const select = {
  padding: "10px",
  marginRight: "20px",
};

const option = {};

const ProductList = () => {
  return (
    <div style={container}>
      <Announcement />
      <Navbar />
      <h1 style={title}>Dresses</h1>
      <div style={filterContainer}>
        <div style={filter}>
          <div style={filterText}>
            Filter Products :
            <select name="Color" style={select}>
              <option selected>All</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
          </div>
        </div>
        <div style={filterText}>Sort Products :</div>
        <div style={filter}></div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
