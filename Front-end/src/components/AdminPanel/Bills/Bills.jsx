import React, { useState, useEffect } from "react";
import "./Bills.css";
import axios from 'axios'



const Bills = () => {


  const [orders, setOrders] = useState([])



  async function getUser() {
    try {
      const response = await axios.get('/receptionorder');
      setOrders(response.data.data)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    getUser()




  }, [orders]);





  return (
    <div className="tabeleContainer">
      <table className="adminTable">
        <thead>
          <tr className="admintableheader">
            <th>Table no</th>
            <th>Order</th>
            <th>Total Bill</th>
            <th>Time of odder</th>
            <th>CheckOut</th>
          </tr>
        </thead>
        <tbody className="adminTbody">
          {orders.map((order, index) => {
            // console.log(order);
            //               order.totalOrder.map((menu)=>{
            // console.log(menu.name);
            //               })
            let menuss = "";
            let dishes = "";
            let totalprice = 0;

            return (
              <tr>
                <td>{order.tableNo}</td>
                <td>{
                  order.totalOrder.map((menu) => {
                    
                    dishes = menuss + menu.name + ' , ';
                    
                    return (
                      dishes
                    )
                  })
                }</td>
                <td>{
                  order.totalOrder.map((menu, index) => {
                    let lastindex = order.totalOrder.length;


                    totalprice += menu.itemPrice;
                    
                    if (index + 1 === lastindex) {
                      return (

                        totalprice

                      )
                    }
                  })
                }</td>
                <td>{order.time}</td>
                <td>
                  <button> <i class="far fa-file-alt"></i> Generate</button>
                </td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>
  );
};

export default Bills;
