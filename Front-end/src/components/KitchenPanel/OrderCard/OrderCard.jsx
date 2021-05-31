import React , {useEffect , useState} from "react";
import "./OrderCard.css";
import axios from 'axios'
// import { useEffect } from "react";
export default function OrderCard() {
  
  const [orders , setOrders] = useState([]);
  let orderNmber=1;

async function fetchOrders() {

  try {
    const response = await axios.get('/getkitchenorder');

    setOrders(response.data.data)

    return orders;

  } catch (error) {
    console.error(error);
  }
}
  
  useEffect( () => {
    fetchOrders()

     
  } , [orders]);

  const deleteOrder = (e) =>{
    console.log(e.target.value);
  }




  return (
    <div className="orderContainer">
    {orders.map((item, index) => {
      // console.log(item.ta);
       let ordernum = orderNmber + index
          return (
            <div className="card-main" key={index}>
            <h2> <img src="./note.svg" alt="img"/> <span>Order {ordernum}</span></h2>
            <h3><img src="./dinner.svg" alt="img"/> <span>Table # {item.tableNo}</span></h3>
            <table>
              <tr className='table-head'>
                <td className="item-head">ITEMS</td>
                <td className="item-qty">QTY</td>
                <td className="item-size">SIZE</td>
              </tr>
            {item.totalOrder.map((a,index)=>{
              console.log(a);
              return( 
            
              <tr>
                <td><h4>{a.name}</h4></td>
                <td><h4>{a.itemQty}</h4></td>
                <td><h4>{a.itemSize}</h4></td>
              </tr>
            
            )
            })}
            </table>
            <button> <img src="./cooking.svg" alt="waiter"/> <span>Start</span></button>
            <button onClick={deleteOrder} value={item.tableNo}> <img src="./waiter.svg" alt="cooking"/>   <span>Ready</span></button>
          </div>
          
          );
        })}
  
    </div>
  );
}

