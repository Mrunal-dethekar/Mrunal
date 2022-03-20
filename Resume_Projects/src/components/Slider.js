import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";

const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const container = {
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  };

  const arrowLeft = {
    width: "50px",
    height: "50px",
    backgroundColor: "#fff7f7",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    bottom: "0",
    margin: "auto",
    left: "10px",
    cursor: "pointer",
    opacity: "0.5",
    zIndex: "2",
  };

  const arrowRight = {
    width: "50px",
    height: "50px",
    backgroundColor: "#fff7f7",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    bottom: "0",
    margin: "auto",
    right: "10px",
    cursor: "pointer",
    opacity: "0.5",
    zIndex: "2",
  };

  const imgContainer = {
    flex: "1",
    height: "100%",
  };

  const infoContainer = {
    flex: "1",
    padding: "50px",
  };

  const img = {
    height: "80%",
    objectFit: "cover",
  };

  const title = {
    fontSize: "70px",
  };

  const desc = {
    margin: "50px 0px",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "3px",
  };

  const button = {
    padding: "10px",
    fontSize: "20px",
    backgroundColor: "transparent",
    cursor: "pointer",
  };

  return (
    <div style={container}>
      <div style={arrowLeft} onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          transform: `translateX(${slideIndex * -100}vw)`,
          transition: "1.5s all ease",
        }}
      >
        {/* wrapper */}
        {sliderItems.map((item) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100vw",
              height: "100%",
              backgroundColor: `#${item.bg}`,
            }} key={item.id}
          >
            <div style={imgContainer}>
              <img src={item.img} style={img} />
            </div>
            <div style={infoContainer}>
              <h1 style={title}>{item.title}</h1>
              <p style={desc}>{item.desc}</p>
              <button style={button}>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div style={arrowRight} onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
