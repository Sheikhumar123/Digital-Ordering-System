import React , {useEffect , useState}  from "react";
import "./CardContainer.css";
import axios from 'axios'
import Card from "../Card/Card";


export default function Icecream() {
  const [icecreams, setIcecreams] = useState([])

  async function fetchIcecream() {

    try {
      const response = await axios.get('/geticecream');
      setIcecreams(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    fetchIcecream()

  }, []);
  

  
  return (
    <>
      <fieldset>
        <legend>Drinks</legend>
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
