import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arrayLength, sendAnswer } from "./redux/action";
import "./app.css";

const App = () => {
  const [currentQueIdx, setcurrentQueIdx] = useState(0);
  const [submitAns, setSubmitAns] = useState([]);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.myReducer);

  useEffect(() => {
    const fetchApi = async () => {
      let res = await fetch("http://localhost:3000/questions");
      let dataOrig = await res.json();
      setData(dataOrig);
      dispatch(arrayLength(dataOrig.length));
    };
    fetchApi();
  }, []);

  let previousQues = () => {
    if (currentQueIdx > 0) {
      setcurrentQueIdx(currentQueIdx - 1);
    }
  };

  let nextQues = () => {
    if (currentQueIdx < data.length - 1) {
      setcurrentQueIdx(currentQueIdx + 1);
    }
  };

  let changedRadio = (e) => {
    let radioAns = e.target.value;
    dispatch(sendAnswer({ index: currentQueIdx, option: radioAns }));
  };

  let submitFun = () => {
    setSubmitAns(state.ans);
  };

  return (
    <div className="app">
      {data[currentQueIdx] && (
        <>
          <p>
            Question no. {data[currentQueIdx].id} {data[currentQueIdx].qtext}
            <br />
          </p>
          <br />
          <form onChange={changedRadio}>
            <input
              type="radio"
              id={`${data[currentQueIdx].options[0]}`}
              name="fav_language"
              value="a"
              checked={state.ans[currentQueIdx] == "a" ? true : false}
            />
            <label for={`${data[currentQueIdx].options[0]}`}>
              {data[currentQueIdx].options[0]}
            </label>
            <br />
            <input
              type="radio"
              id={`${data[currentQueIdx].options[1]}`}
              name="fav_language"
              value="b"
              checked={state.ans[currentQueIdx] == "b" ? true : false}
            />
            <label for={`${data[currentQueIdx].options[1]}`}>
              {data[currentQueIdx].options[1]}
            </label>
            <br />
            <input
              type="radio"
              id={`${data[currentQueIdx].options[2]}`}
              name="fav_language"
              value="c"
              checked={state.ans[currentQueIdx] == "c" ? true : false}
            />
            <label for={`${data[currentQueIdx].options[2]}`}>
              {data[currentQueIdx].options[2]}
            </label>
            <br />
            <input
              type="radio"
              id={`${data[currentQueIdx].options[3]}`}
              name="fav_language"
              value="d"
              checked={state.ans[currentQueIdx] == "d" ? true : false}
            />
            <label for={`${data[currentQueIdx].options[3]}`}>
              {data[currentQueIdx].options[3]}
            </label>
          </form>
        </>
      )}

      <button onClick={previousQues} disabled={currentQueIdx == 0}>
        Previous
      </button>
      <button onClick={nextQues} disabled={currentQueIdx == data.length - 1}>
        Next
      </button>
      {currentQueIdx == data.length - 1 && (
        <button onClick={submitFun}>Submit</button>
      )}
      {submitAns.length ? (
        <div>
          Answer :{" "}
          {submitAns.map((ele) => (
            <span>{ele} </span>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
