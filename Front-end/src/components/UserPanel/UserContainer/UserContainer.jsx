import React, { useState, useEffect } from "react";
import "./UserContainer.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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
import ShowFeedback from "../feedback/Feedback";
import { firebase } from "../../../firebase.js";
import { toast } from "react-toastify";


export default function UserContainer() {
  let data = useState("all");
  let checkCart = useState({ checkCart: false });
  let checkfeedBack = useState({ checkFeed: false });
  let cartItems = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    var starCountRef = firebase
      .database()
      .ref("chefToUserPanel/" + Cookies.get("name"));
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        // current time
        const currenTime = new Date();

        // get date for estimated time
        const date = new Date().toLocaleDateString();
        const estimatedtime = new Date(`${date} ${data.time}`);

        // calculate total time required for order
        var diff = (estimatedtime.getTime() - currenTime.getTime()) / 1000;
        diff /= 60;
        const totaltime = Math.abs(Math.round(diff));

        console.log(totaltime, "minutes");

        // toast.info(data.message, {
        //   position: "top-left",
        // });

        toast.info(
          `${data.message}. Your Order take ${totaltime} minutes to ready! Wait Please.`,
          {
            position: "top-left",
          }
        );
      }
    });
  }, []);
  // get notification hat order od cancled
  useEffect(() => {
    var starCountRef = firebase
      .database()
      .ref("chefToUserForDelete/" + Cookies.get("name"));
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        toast.info(
          `${data.message}`,
          {
            position: "top-left",
          }
        );
      }
    });
  }, []);


  

  useEffect(() => {
    if (Cookies.get("name")) {
      if (Cookies.get("name") === "admin") {
        navigate("/admin");
      } else if (Cookies.get("name") === "chef") {
        navigate("/chefpanel");
      }
    } else {
      navigate("/");
    }
  }, []);

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
                <ShowFeedback />
              </div>
            </div>
          </cartContext.Provider>
        </CheckCartContext.Provider>
      </CategoreyContext.Provider>
    </feedbackContext.Provider>
  );
}
