import {createContext} from 'react';
import axios from 'axios'

const fetchPizzaContext = createContext(


    async function fetchData(){
    
        try {
            const response = await axios.get('/getpizza');
            console.log(response.data);
            return response
            // setOrders(response.data.data)
            
          } catch (error) {
            console.error(error);
          }
        }
);

export default fetchPizzaContext;