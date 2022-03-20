import { Send } from "@material-ui/icons";
import React from "react";

const Newsletter = () => {
  const container = {
    height: "60vh",
    backgroundColor: "#fcf5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const title = {
    fontSize: "70px",
    marginBottom: "20px",
  };

  const disc = {
    fontSize: "24px",
    fontWeight: "300",
    marginBottom: "20px",
  };

  const inputContainer = {
    width: "50%",
    height: "40px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid lightgray",
  };

  const input = {
    border: "none",
    flex: "8",
    paddingLeft: "20px",
  };

  const button = {
    flex: "1",
    border: "none",
    backgroundColor: "teal",
    color:'white'
  };

  return (
    <div style={container}>
      <h1 style={title}>NewsLetter</h1>
      <div style={disc}>Get Timely Updates from your favorite Products.</div>
      <div style={inputContainer}>
        <input type="text" style={input} placeholder="Your Email" />
        <button style={button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
