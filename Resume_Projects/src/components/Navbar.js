import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  const container = {
    height: "60px",
  }

  const wrapper = {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }

  const left = {
    flex: "1",
    display: "flex",
    alignItems: "center",
  }

  const center = {
    flex: "1",
    textAlign: "center",
  }

  const right = {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  }

  const language = {
    fontSize: "14px",
    cursor: "pointer",
  }

  const searchContainer = {
    border: "0.5px solid lightgray",
    display: "flex",
    alignItems: "center",
    marginLeft: "25px",
    padding: "5px",
  }

  const logo = {
    fontWeight: "bold",
  }

  const menuItem = {
    fontStyle: "14px",
    cursor: "pointer",
    marginLeft: "25px",
  }

  return (
    <div style={container}>
      <div style={wrapper}>
        <div style={left}>
          <div style={language}>EN</div>
          <div style={searchContainer}>
            <input type="text" style={{ border: "none" }} />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </div>
        </div>
        <div style={center}>
          <h1 style={logo}>E-Commerce</h1>
        </div>
        <div style={right}>
          <div style={menuItem}>REGISTER</div>
          <div style={menuItem}>SIGN IN</div>
          <div style={menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
