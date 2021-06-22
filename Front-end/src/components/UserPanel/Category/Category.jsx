import "./Category.css";
import React, { useState, useContext, useEffect } from "react";
import CategoryContex from "../../Context/CategoryContex";
import CheckCartContext from '../../Context/CheckCartContext';
import cartContext from '../../Context/cartContext';
import feedbackContext from '../../Context/feedbackContext';
import menu from './menu (1).svg';
import Cookies from "js-cookie";
import { firebase } from "../../../firebase"

export default function Category() {

  // this class is used to make category bar stiky when we set it to 'categoryContaiener Stiky'
  let classNames = ['categoryContainer'];

  // code to fix the menu bar
  useEffect(() => {
    const header = document.getElementById("menu");
    const sticky = header.offsetTop;
    // This function make nav Stiky when scroll
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);


  // code  to set Category in state
  const [category, setCategory] = useState("all");

  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  // use context here to set data
  const context = useContext(CategoryContex);
  context[1](category);

  // use checkcartcontext here to set cartdata to show and hide
  const checkCart = useContext(CheckCartContext);

  const checkFeed = useContext(feedbackContext);

  // use cartcontext here to show numbers of items that are in the cart
  const cartItems = useContext(cartContext);


  // show cart when click on the cart button
  const showCart = () => {
    checkCart[1]({ checkCart: true });
  }

  const showFeedback = () => {

    firebase.database().ref('callBill/').set({
      message: `please send me bill ${Cookies.get("name")}`,
      // tableNo: Cookies.get("name")
    });
    setTimeout(() => {
      console.log("hello");
      firebase.database().ref('callBill/').remove();
    }, 100);
    checkFeed[1]({ checkFeed: true });
    console.log(checkFeed)

  }

  const callwaiter = () => {

    firebase.database().ref('callWaiter/').set({
      message: `${Cookies.get("name")} is calling waiter`,
      // tableNo: Cookies.get("name")
    });

    setTimeout(() => {
      console.log("hello");
      firebase.database().ref('callWaiter/').remove();
    }, 100);
  }

  return (
    <div className={classNames.join(' ')} id="menu">
      <h2> <img src={menu} alt="menu" />Menu</h2>
      <div className="cartbox" style={{ display: "flex" }}>
        <select onChange={getCategory} value={category}>
          <option value="all">All Foods</option>
          <option value="Pizza">Pizza</option>
          <option value="Special">Special Pizza</option>
          <option value="Drinks">Drinks</option>
          <option value="Burger">Burger</option>
          <option value="Icecream">Icecream</option>
        </select>

        <button onClick={showFeedback}>
          <img src="/img/bill.svg" alt="not found" />
          Call Bill</button>
        <button onClick={callwaiter}>
          <img src="/img/Waiter.svg" alt="not found" />
          Call Waiter</button>
        <div className="cartContainer" onClick={showCart}>
          <img src="addToCart.svg" alt="cart" />
          <p className="countItems">{cartItems[0].length}</p>
        </div>
      </div>
    </div>
  );
}
