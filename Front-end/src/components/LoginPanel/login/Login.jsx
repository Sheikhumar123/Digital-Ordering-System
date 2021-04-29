import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [formData, setFormData] = useState({
    tableName: '', password: ''
  })


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value

    setFormData({ ...formData, [name]: value })

  }
  console.log(formData);
  const navigate = useNavigate();



  const userAuth = async (e) => {
    e.preventDefault();

    const { tableName, password } = formData
    // console.log(tableName);

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        tableName,
        password
      })

    });


    const data = await res.data;

    console.log(data);

    // if (data.error) {
    //   window.alert("invald table");
    //   console.log(`invalid user ${data.error}`);
    // } else {
    //   window.alert("user matched")
      // console.log(data.message);
      // navigate('/userpanel' , {state : data.tableName});





      // if(userName === "table1" && userPassword === "123"){
      //   // here i user navigate to redirect to /userpanel route and pass a state to show logined username in userpanel component
      //   navigate('/userpanel',{state : userName});
      // }
      // else if(userName === "cheif" && userPassword === "456"){
      //   navigate('/CheifPanel',{state:userName});
      // }
      // else if(userName === "admin" && userPassword === "789"){
      //   navigate('/admin',{state:userName});
      // }
    // }
  }

    return (
      <div className="login_box">
        <form method="POST" className="login_form" onSubmit={userAuth}>
          <h1>Welcome</h1>
          <div className="form-control">
            <input id="name" value={formData.tableName} name="tableName" type="text" required onChange={handleChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-control">
            <input id="pass" value={formData.password} name="password" type="password" required onChange={handleChange} />
            <label htmlFor="pass">Password</label>
          </div>
          <div className="form-control" style={{ textAlign: 'center' }}>
            <button className="learn-more" type='submit'>
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Login Now</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
