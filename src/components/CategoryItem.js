import React from "react";
import { categories } from "../pages/data";

const CategoryItem = ({ items }) => {
  return (
    <div
      className="item-container"
      style={{
        flex: "1",
        margin: "3px",
        backgroundColor: "rgb(239, 246, 248)",
        position: "relative",
      }}
    >
      <img src={items.img} style={{ width: "400px", height: "400px" }}></img>
      <div
        // style={{
        //   position: "absolute",
        //   top: "0",
        //   left: "0",
        //   width: "30%",
        //   height: "100%",
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
        className="item-info"
      >
        <h3>{items.title}</h3>
        <button
          style={{
            padding: "5px",
            fontSize: "20",
            backgroundColor: "grey",
            cursor: "pointer",
            paddingLeft: "10px",
            border: "none",
          }}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
