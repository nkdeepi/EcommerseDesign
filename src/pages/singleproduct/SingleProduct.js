import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Announcement from "../Announcement";
import "../singleproduct/singleproduct.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const SingleProduct = () => {
  return (
    <div className="spcontainer">
      <Navbar />
      <Announcement />
      <div className="spwrapper">
        <div className="spimagecontainer">
          <img src="https://cpimg.tistatic.com/05868562/b/4/Kids-frock.jpg"></img>
        </div>
        <div className="spinfocontainer">
          <h3 style={{ fontWeight: "bold" }}>
            Girls Midi/Knee Length Party Dress
          </h3>
          <p style={{ margin: "20px 0px" }}>
            Elegant cotton summer frock that adds beauty and comfort to your
            baby, both for party as well as regular wear
          </p>
          <span style={{ fontWeight: "100px", fontSize: "30px" }}>
            <CurrencyRupeeIcon />
            700/-
          </span>

          <div className="spfiltercontainer">
            <div className="spfilter">
              <select style={{ padding: "px", marginRight: "10px" }}>
                <option disabled selected>
                  color
                </option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Black</option>
              </select>
              <select>
                <option disabled selected>
                  Size
                </option>
                <option>Xs</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="addcontainer">
              <div className="amountcontainer">
                <RemoveIcon/>
                <span className="amount">1</span>
                <AddIcon/>
                <button className="spbutton">ADD TO CART</button>


              </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
