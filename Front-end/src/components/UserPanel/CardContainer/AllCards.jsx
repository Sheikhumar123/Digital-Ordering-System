import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import axios from "axios";

// import components
import Card from "../Card/Card";

export default function AllCards() {
  const [pizzas, setPizzas] = useState([]);
  const [specialPizzas, setSpecialPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [icecreams, setIcecreams] = useState([]);

  // function to fetch icecream from database
  async function fetchIcecream() {
    try {
      const response = await axios.get("/geticecream");
      console.log(response);
      // set data to state
      setIcecreams(response.data.data);
      console.log(icecreams);
    } catch (error) {
      console.error(error);
    }
  }

  // function to fetch PIzza from database
  async function fetchPizza() {
    try {
      const response = await axios.get("/getpizza");
      setPizzas(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // function to fetch Special from database
  async function fetchSpecialPizza() {
    try {
      const response = await axios.get("/getspecialpizza");
      setSpecialPizzas(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // function to fetch Drink from database
  async function fetchDrink() {
    try {
      const response = await axios.get("/getdrink");
      setDrinks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // function to fetch Burger from database
  async function fetchBurger() {
    try {
      const response = await axios.get("/getburger");
      setBurgers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPizza();
    fetchSpecialPizza();
    fetchDrink();
    fetchBurger();
    fetchIcecream();
  }, []);

  return (
    <>
      <fieldset>
        <legend>Pizza</legend>
        {pizzas.map((pizza, index) => {
          return (
            <Card
              name={pizza.dishName}
              ingre={pizza.dishIngri}
              img={pizza.secureUrl}
              sPrice={pizza.priceForSmall}
              mPrice={pizza.priceForMedium}
              lPrice={pizza.priceForLarge}
              key={index}
            />
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Special Pizza</legend>
        {specialPizzas.map((pizza, index) => {
          return (
            <Card
              name={pizza.dishName}
              ingre={pizza.dishIngri}
              img={pizza.secureUrl}
              sPrice={pizza.priceForSmall}
              mPrice={pizza.priceForMedium}
              lPrice={pizza.priceForLarge}
              key={index}
            />
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Drinks</legend>
        {drinks.map((drink, index) => {
          return (
            <Card
              type="drink"
              name={drink.drinkName}
              img={drink.secureUrl}
              sPrice={drink.priceForRegular}
              mPrice={drink.priceForHalf}
              lPrice={drink.priceForLiter}
              key={index}
            />
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Burgers</legend>
        {/* get data from database and then loop on it and render these card automaticly */}
        {burgers.map((burger, index) => {
          return (
            <Card
              type="Burger"
              name={burger.dishName}
              ingre={burger.dishIngri}
              img={burger.secureUrl}
              price={burger.price}
            />
          );
        })}
      </fieldset>
      <fieldset>
        <legend>Icecream</legend>
        {icecreams.map((icecream, index) => {
          return (
            <Card
              type="Icecream"
              name={icecream.dishName}
              img={icecream.secureUrl}
              sPrice={icecream.priceForRegular}
              lPrice={icecream.priceForLarge}
            />
          );
        })}
      </fieldset>
    </>
  );
}
