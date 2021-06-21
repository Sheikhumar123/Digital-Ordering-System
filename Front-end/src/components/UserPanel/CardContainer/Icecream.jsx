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
        {/* {drinks.map((drink, index) => { */}
          {/* return ( */}
            <Card
              type="Icecream"
              name="Starwbery"
              img="./img/icecream.png"
              sPrice="150"
              lPrice="250"
            />
          {/* ); */}
        {/* })} */}
      </fieldset>
    </>
  );
}
