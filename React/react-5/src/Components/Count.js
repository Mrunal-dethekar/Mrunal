import React from "react";
import { incrementCounter, decrementCounter } from "../redux";
import { connect } from "react-redux";

function Count(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count</h1>
      <h1>{props.count}</h1>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
        onClick={()=>props.incrementCounter()}
      >
        Increment
      </button>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
        onClick={()=>props.decrementCounter()}
      >
        Decrement
      </button><br/>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
        onClick={()=>props.incrementCounter(3)}
      >
        Increment 3
      </button>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          margin: "10px",
        }}
        onClick={()=>props.decrementCounter(3)}
      >
        Decrement 3
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (count) => dispatch(incrementCounter(count)),
    decrementCounter: (count) => dispatch(decrementCounter(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
