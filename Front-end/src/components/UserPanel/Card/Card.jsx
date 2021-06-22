import "./Card.css";
import { useState, useContext } from "react";
import cartContext from "../../Context/cartContext";

export default function Card(props) {
  // state for getting Quntity of food by default is 1
  let [qty, setQty] = useState(1);
  // State for getting Size of Food by default 's' is drink or icecream then 'r' 
  let [size, setSize] = useState(
    props.type === "drink" || props.type === "Icecream" ? "r" : "s"
  );

  const cartItems = useContext(cartContext);

  // function for increase qty
  const increaseQty = () => setQty(++qty);

  // function for decrease qty
  const decreaseQty = () => {
    if (qty !== 1) {
      setQty(--qty);
    }
  };

  // get Size
  const getSize = (sizeValue) => {
    setSize(sizeValue);
  };

  // Make item Object to add food in cart
  let itemData = {
    name: props.name,
    itemSize: props.type !== "Burger" ? size : "r",
    itemQty: qty,
    itemPrice:
    // set price according to food type
      props.type !== "Burger"
        ? size === "s" || size === "r"
          ? props.sPrice
          : size === "m" || size === "h"
          ? props.mPrice
          : props.lPrice
        : props.price,
  };

  // function that set the food item into cart context for render in cart
  const addToCart = (e) => {
    cartItems[1]([...cartItems[0], itemData]);
  };

  return (
    <div className="card">
      <img
        className="img"
        src={props.img}
        id={props.type === "drink" ? "drink" : ""}
        alt="food"
      />
      <h2>{props.name}</h2>
      <p className="ingredients">{props.ingre}</p>
      <p className="price">
        <img
          style={{ width: "17px", verticalAlign: "middle" }}
          src="./pakistan-rupee-currency-symbol.svg"
          alt="RS"
        />
        {props.type === "Burger" ? (
          <span>{props.type === "Burger" ? props.price : ""}</span>
        ) : (
          <span>
            {size === "s" || size === "r"
              ? props.sPrice
              : size === "m" || size === "h"
              ? props.mPrice
              : props.lPrice}
          </span>
        )}
      </p>
      <div className="options">
        <div className="qty">
          <h3>Quantity</h3>
          <div>
            <button onClick={decreaseQty}> - </button>
            <span> {qty} </span>
            <button onClick={increaseQty}> + </button>
          </div>
        </div>
        {props.type !== "Burger" ? (
          <div className="size">
            <h3>Size</h3>
            <div>
              {/* Starting Button Component */}
              <button
                onClick={() => {
                  //    set state
                  if (props.type === "drink" || props.type === "Icecream") {
                    getSize("r");
                  } else {
                    getSize("s");
                  }
                }}
                className={
                  size === "s" ? "selected" : size === "r" ? "selected" : ""
                }
              >
                {props.type === "drink" || props.type === "Icecream"
                  ? "R"
                  : "S"}
              </button>
              {/* Ending Button Component */}

              {/* Display M or H if type !== Iceceram else "" */}
              {props.type !== "Icecream" ? (
                <button
                  onClick={() => {
                    if (props.type === "drink") {
                      getSize("h");
                    } else {
                      getSize("m");
                    }
                  }}
                  className={
                    size === "m" ? "selected" : size === "h" ? "selected" : ""
                  }
                >
                  {" "}
                  {props.type === "drink" ? "H" : "M"}{" "}
                </button>
              ) : (
                ""
              )}

              <button
                onClick={() => {
                  getSize("l");
                }}
                className={size === "l" ? "selected" : ""}
              >
                L
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <button className="addToCart" onClick={addToCart}>
        {" "}
        <img src="shopping-cart.svg" alt="cart" /> <span>Add to Cart</span>
      </button>
    </div>
  );
}
