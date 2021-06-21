import React, { useContext } from "react";
import "./CardContainer.css";
import AllCard from './AllCards';
import Pizzas from './Pizzas';
import Special from './Special';
import Drinks from './Drinks';
import Burger from './burger';
import Icecream from './Icecream';

import categoryContext from "../../Context/CategoryContex";

export default function CardContainer() {
  
// Type selected from Dropdown
  const type = useContext(categoryContext);
// Add componet in cards variable according to the type
  const cards = type[0] === 'all' ? <AllCard/> : type[0]==='Pizza' ? <Pizzas/> : type[0]==='Special' ? <Special/> : type[0]==='Burger' ? <Burger/> : type[0]==='Icecream' ? <Icecream/> : <Drinks/>; 

  return(
    <div className="cardContainer">
      {cards}
    </div>
  );
}
