import React from "react";

const Announcement = () => {
  const container = {
    height: "30px",
    backgroundColor: "teal",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "500",
  };

  return (
    <div style={container}>Super Deal! Free Shiping on Orders Over $50</div>
  );
};

export default Announcement;
