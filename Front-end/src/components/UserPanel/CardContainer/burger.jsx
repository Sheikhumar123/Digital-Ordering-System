import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

export default function Burger() {
  return (
    <>
      <fieldset>
        <legend>Burger</legend>
        <Card
          type="Burger"
          name="Burger"
          ingre="A juicy boneless chicken fillet marinated in traditional spices and Flame Grilled with spicy tangy sauce, lettuce and tomatoes."
          img="./img/burger.png"
          price=" 100"
        />
        <Card
          type="Burger"
          name="Chicken Burger"
          ingre="A juicy boneless chicken fillet marinated in traditional spices and Flame Grilled with spicy tangy sauce, lettuce and tomatoes."
          img="./img/burger.png"
          price=" 150"
        />
      </fieldset>
    </>
  );
}
