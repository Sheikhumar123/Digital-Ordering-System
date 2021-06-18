import React, { useEffect, useState } from "react";
import "./OrderCard.css";
import axios from 'axios'
import { firebase } from '../../../firebase';
import { toast } from "react-toastify"

// import { useEffect } from "react";
export default function OrderCard() {

  const [orders, setOrders] = useState([]);
  let orderNmber = 1;

  // firebase database
  const writeUserData = (e) => {
    console.log(e);
    let id = e.currentTarget.getAttribute('tid')
    firebase.database().ref('chefToUserPanel/' + id).set({
      message: `order staretd of table no  ${e.currentTarget.getAttribute('tid')}`
    });
    setTimeout(() => {
      console.log("hello");
      firebase.database().ref('chefToUserPanel/' + id).remove();
    }, 5);
    e.currentTarget.classList.add('disablebtn');
  }

  const deleteOrder = (e) => {
    const tableName = e.currentTarget.getAttribute('tid')
    axios.post('/deleteOrderfromKitchen', {
      tableName
    })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message) {
          firebase.database().ref('chefToAdmin/').set({
            message: `${tableName} order in ready please collect it`
          });
          setTimeout(() => {
            firebase.database().ref('chefToAdmin/').remove();
          }, 100);
        }
        toast.success(res.data.message, {
          position: "top-left",
        });
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-left",
        });
        console.log(err);
      });
  }



  async function fetchOrders() {
    try {
      const response = await axios.get('/getkitchenorder');
      setOrders(response.data.data)
      return orders;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchOrders()

  }, [orders]);

  return (
    <div className="orderContainer">
      {orders.map((item, index) => {
        let ordernum = orderNmber + index
        return (
          <div className="card-main" key={index}>
            <h2> <img src="./note.svg" alt="img" /> <span>Order {ordernum}</span></h2>
            <h3><img src="./dinner.svg" alt="img" /> <span>{item.tableNo}</span></h3>
            <table>
              <tr className='table-head'>
                <td className="item-head">ITEMS</td>
                <td className="item-qty">QTY</td>
                <td className="item-size">SIZE</td>
              </tr>
              {item.totalOrder.map((a, index) => {
                return (
                  <tr key={index}>
                    <td><h4>{a.name}</h4></td>
                    <td><h4>{a.itemQty}</h4></td>
                    <td><h4>{a.itemSize}</h4></td>
                  </tr>
                )
              })}
            </table>
            <button onClick={(e) => writeUserData(e)} tid={item.tableNo}> <img src="./cooking.svg" alt="waiter" /> <span>Start</span></button>
            <button onClick={(e) => { deleteOrder(e) }} tid={item.tableNo} value={item.tableNo}> <img src="./waiter.svg" alt="cooking" />   <span>Ready</span></button>
          </div>
        );
      })}
    </div>
  );
}

