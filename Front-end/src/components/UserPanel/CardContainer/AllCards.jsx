import React from "react";
import "./CardContainer.css";

// import components
import Card from "../Card/Card";
// import api for dummy data rendering
import foodList from "../../api/api";

export default function AllCards() {
  return (
    <>
      <fieldset>
        <legend>Pizza</legend>
        {foodList.pizza.map((pizza, index) => {
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
      <fieldset>
        <legend>Drinks</legend>
        {foodList.drinks.map((drink, index) => {
          return (
            <Card
              type="drink"
              name={drink.drinkName}
              ingre={drink.ingridients}
              img={drink.src}
              sPrice={drink.regular}
              mPrice={drink.halfLiter}
              lPrice={drink.litter}
              key={index}
            />
          );
        })}
      </fieldset>
    </>
  );
}
