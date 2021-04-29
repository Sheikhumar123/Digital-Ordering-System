import React from "react";
import "./CardContainer.css";

// import components
import Card from "../Card/Card";
// import api for dummy data rendering
import foodList from "../../api/api";

export default function Special() {
  return (
    <>
      <fieldset>
        <legend>Special Pizza</legend>
        {foodList.specialPizza.map((pizza, index) => {
          return (
            <Card
              name={pizza.pizzaName}
              ingre={pizza.ingridients}
              img={pizza.src}
              sPrice={pizza.small_price}
              mPrice={pizza.medium_price}
              lPrice={pizza.large_price}
              key={index}
            />
          );
        })}
      </fieldset>
    </>
  );
}
