import React, { useState } from "react";
import "./UserContainer.css";

// import components
import "../Header/Header";
import Header from "../Header/Header";
import Info from "../info/Info";
import Category from "../Category/Category";
import CardContainer from "../CardContainer/CardContainer";
import AddToCart from "../AddToCart/AddToCart";

// import category Context here to send data to all the childs
import CategoreyContext from "../../Context/CategoryContex";
import CheckCartContext from "../../Context/CheckCartContext";
import cartContext from "../../Context/cartContext";
import feedbackContext from "../../Context/feedbackContext";
import ShowFeedback from '../feedback/Feedback';

export default function UserContainer() {
  let data = useState("all");
  let checkCart = useState({ checkCart: false });
  let cartItems = useState([]);
  let checkfeedBack = useState({ checkFeed: false });
  return (
    <feedbackContext.Provider value={checkfeedBack}>
      <CategoreyContext.Provider value={data}>
        <CheckCartContext.Provider value={checkCart}>
          <cartContext.Provider value={cartItems}>
            <div className="userContainer">
              <div className="filter">
                <Header />
                <Info />
                <Category />
                <CardContainer />
                <AddToCart />
                <ShowFeedback/>
              </div>
            </div>
          </cartContext.Provider>
        </CheckCartContext.Provider>
      </CategoreyContext.Provider>
    </feedbackContext.Provider>
  );
}
