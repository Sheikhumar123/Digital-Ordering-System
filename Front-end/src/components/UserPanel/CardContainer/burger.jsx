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
      </fieldset>
    </>
  );
}
