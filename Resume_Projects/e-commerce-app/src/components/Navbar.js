import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LinkColor ={
  color: 'black',
  textDecoration: 'none',
}

const container = {
  height: "60px",
};

const wrapper = {
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const left = {
  flex: "1",
  display: "flex",
  alignItems: "center",
};

const center = {
  flex: "1",
  textAlign: "center",
};

const right = {
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

const language = {
  fontSize: "14px",
  cursor: "pointer",
};

const searchContainer = {
  border: "0.5px solid lightgray",
  display: "flex",
  alignItems: "center",
  marginLeft: "25px",
  padding: "5px",
};

const logo = {
  fontWeight: "bold",
};

const menuItem = {
  fontStyle: "14px",
  cursor: "pointer",
  marginLeft: "25px",
};

const Navbar = () => {

  const state = useSelector((state)=> state.handleCart)
  

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
        <div style={center}><Link to="/" style={LinkColor}>
          <h1 style={logo}>E-Commerce</h1></Link>
        </div>
        <div style={right}>
          <div style={menuItem}>REGISTER</div>
          <div style={menuItem}>SIGN IN</div>
          <div style={menuItem}>
            <Link to="/cart" style={LinkColor}>
              <Badge badgeContent={state.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
