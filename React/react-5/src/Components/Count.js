import React from "react";

function Count() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count</h1>
      <h1>0</h1>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Count;
