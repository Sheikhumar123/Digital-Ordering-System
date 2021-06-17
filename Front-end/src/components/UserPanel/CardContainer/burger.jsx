import React, {useState , useEffect} from "react";
import "./CardContainer.css";
import Card from "../Card/Card";
import axios from "axios";

export default function Burger() {
  const [burgers, setBurgers] = useState([])

  
  async function fetchBurger() {

    try {
      const response = await axios.get('/getburger');

      setBurgers(response.data.data)

    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    fetchBurger()

  }, []);

  return (
    <>
      <fieldset>
        <legend>Burger</legend>
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
        {/* <Card
          type="Burger"
          name="Chicken Burger"
          ingre="A juicy boneless chicken fillet marinated in traditional spices and Flame Grilled with spicy tangy sauce, lettuce and tomatoes."
          img="./img/burger.png"
          price=" 150"
        /> */}
      </fieldset>
    </>
  );
}
