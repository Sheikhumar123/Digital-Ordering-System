import React  from "react";
import "./CardContainer.css";



// import components
import Card from "../Card/Card";
// import api for dummy data rendering
import foodList from "../../api/api";
// import fetchPizzaContext from "../../Context/fetchPizzaContext";
// import {fetchData} from "../../api/api";

export default function Drinks() {
  // const res = fetchData()
  
  

  
  return (
    <>
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
