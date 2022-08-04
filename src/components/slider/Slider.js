import React from "react";
import "../slider/Slider.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import logo from "../slider/img1.jpg";
const Slider = () => {
  return (
    <>
      <div className="container">
        <div className="arrow" direction="left">
          <ArrowLeftOutlinedIcon />
        </div>
        <div className="wrapper">
          <div className="slide">
            <div className="imgContainer">
              <img className="slideimg" src={logo}></img>
            </div>
            <div className="infoContainer">
              <h1 style={{ fontSize: "50px" }}>SUMMER SALE!!!!</h1>
              <p
                style={{
                  margin: "50px 0 px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                {" "}
                DONT COMPROMISE ON STYLE!!!FLAT 30% OFFER FOR NEW ARRIVALS
              </p>
              <button
                style={{
                  padding: "10px",
                  fontSize: "20",
                  backgroundColor: "grey",
                  cursor: "pointer",
                  paddingLeft: "10px",
                  border:"none"
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="slide">
            <div className="imgContainer">
              <img className="slideimg" src={logo}></img>
            </div>
            <div className="infoContainer">
              <h1 style={{ fontSize: "50px" }}>SUMMER SALE!!!!</h1>
              <p
                style={{
                  margin: "50px 0 px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                {" "}
                DONT COMPROMISE ON STYLE!!!FLAT 30% OFFER FOR NEW ARRIVALS
              </p>
              <button
                style={{
                  padding: "10px",
                  fontSize: "20",
                  backgroundColor: "grey",
                  cursor: "pointer",
                  paddingLeft: "10px",
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        
        <div className="arrow" direction="right">
          <ArrowRightOutlinedIcon />
        </div>
      </div>
    </>
  );
};

export default Slider;
