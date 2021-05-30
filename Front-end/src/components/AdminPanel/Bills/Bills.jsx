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

  useEffect( () => {


    getUser()
    



    }, []);

  



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
            let abc = "";
            let efg = 0;
            
            return (
              <tr>
                <td>{order.tableNo}</td>
                <td>{
                  order.totalOrder.map((menu) => {
                    // console.log(menu.name);
                     abc = menuss  + menu.name + ' , ';
                    // console.log(abc);
                    return (
                      abc
                    )
                  })
                  }</td>
                <td>{
                   order.totalOrder.map((menu) => {
                    // console.log(menu.itemPrice);
                    // let abd = menu.itemPrice;
                    
                     efg += menu.itemPrice ;
                    // console.log(efg);
                    return (
                      efg
                    )
                  })
                  }</td>
                  <td>{order.time}</td>
                <td>
                  <button> <i class="far fa-file-alt"></i> Generate</button>
                </td>
              </tr>
            )
          })}

          <tr>
            <td>Table 1</td>
            <td>2 burgers , 1 pizza(small), colddrink(regular)</td>
            <td>1500</td>
            <td>
              <button> <i class="far fa-file-alt"></i> Generate</button>
            </td>
          </tr>
          <tr>
            <td>Table 1</td>
            <td>2 burgers , 1 pizza(small), colddrink(regular)</td>
            <td>1500</td>
            <td>
              <button> <i class="far fa-file-alt"></i> Generate</button>
            </td>
          </tr>
          <tr>
            <td>Table 1</td>
            <td>2 burgers , 1 pizza(small), colddrink(regular)</td>
            <td>1500</td>
            <td>
              <button> <i class="far fa-file-alt"></i> Generate</button>
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default Bills;
