import React from "react";

const container = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#07073d",
  display: "flex",
};

const left ={
  height: "100vh",
  width: "50%",
  padding: "10% 5%",
  position: "relative",
};

const right = {
  height: "100vh",
  width: "50%",
  padding :"50px 10px"
};

const App = () => {
  return (
    <div style={container}>
      <div style={left}>
        <span style={{ color: "#99abce" }}>
          <i class="fa-solid fa-hand-wave"></i>Welcome to Proof.
        </span>
        <div style={{ fontSize: "3rem", color: "white" }}>
          Boost your website conversions by 15% in under 15 minutes
        </div>
        <div
          style={{ color: "#99abce", padding: "20px 0", fontWeight: "bold" }}
        >
          We believe customer-obsessed marketing is the best kind of marketing.
          Proof makes it easy. Make your website delightfully human.
        </div>
        <div
          style={{
            height: "60px",
            padding: "5px",
            backgroundColor: "white",
            width: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <input
            type="text"
            style={{
              width: "80%",
              height: "40%",
              padding: "10px",
              border: "none",
            }}
            placeholder="Enter Your Email"
          />
          <button
            style={{
              width: "20%",
              height: "100%",
              backgroundColor: "blue",
              border: "none",
              color: "white",
            }}
          >
            Try For Free
          </button>
        </div>
        <div style={{ margin: "100px 0" }}>
          <span style={{ color: "white", fontSize: "1.2rem" }}>
            1,000+ people{" "}
          </span>
          <span style={{ color: "#99abce", opacity: "0.4" }}>
            started a free trial in the last 30 days
          </span>
        </div>
      </div>
      <div style={right}>
        <img
          src="https://uploads-ssl.webflow.com/59318798d83bff2781822428/5f7b7e04b4ac83ac14c65bfa_Rachel%203x%20(1).jpg"
          alt=""
          srcset=""
          style={{width:"500px", height:"600px", borderRadius:"10px"}}
        />
      </div>
    </div>
  );
};

export default App;
