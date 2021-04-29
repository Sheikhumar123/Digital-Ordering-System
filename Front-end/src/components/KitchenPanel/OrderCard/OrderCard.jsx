import React , {useEffect , useState} from "react";
import "./OrderCard.css";
// import { useEffect } from "react";
export default function OrderCard() {

 const [orders , setOrders] = useState([])

//  const getOrder = () =>{

//  console.log(orders);
  
  useEffect(async () => {

    // async function abc(params) {
      
      const res = await fetch("/getkitchenorder")
      const data = await res.json()
      const orders = await  data.data
      setOrders(orders)
      return orders;
      // console.log(orders);
      // return orders;
      // orders.map((order)=>{
      //   console.log(order.tableNo);
      //   const total =  order.totalOrder;
      //   total.map((list)=>{

      //     console.log(list);
      //   })
      // })
    // }

     
  } , []);
// }

// const abc = getOrder()
// console.log(abc);
  
 
  //   setData(result.data);
  // });

  let orderNmber=10;
//   let arr=[{
//     orderNmber:orderNmber,
//     // tableNumber: {order.tableNo},
//     items:[
//       {
//       itemName:"Behare Kabab",
//       itemQty:"2",
//       itemSize:"large"
//     },
//     {
//       itemName:"Zinfger",
//       itemQty:"2",
//       itemSize:"large"
//     },
//     {
//       itemName:"Coke",
//       itemQty:"2",
//       itemSize:"Regular"
//     },
//   ] 
//   },{
//     orderNmber:orderNmber,
//     tableNumber:"1",
//     items:[
//       {
//       itemName:"Behare Kabab",
//       itemQty:"2",
//       itemSize:"large"
//     },
//     {
//       itemName:"Zinfger",
//       itemQty:"2",
//       itemSize:"large"
//     },
//     {
//       itemName:"Coke",
//       itemQty:"2",
//       itemSize:"Regular"
//     },
//   ] 
//   }
// ]
  return (
    <div className="orderContainer">
    {orders.map((item, index) => {
       orderNmber++
          return (
            <div className="card-main" key={index}>
            <h2> <img src="./note.svg" alt="img"/> <span>Order {orderNmber}</span></h2>
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
            <button> <img src="./waiter.svg" alt="cooking"/> <span>Ready</span></button>
          </div>
          
          );
        })}
  
    </div>
  );
}

