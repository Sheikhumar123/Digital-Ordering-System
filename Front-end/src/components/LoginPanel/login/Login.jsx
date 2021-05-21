import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {

  const [formData, setFormData] = useState({
    tableName: '', password: ''
  })


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value

    setFormData({ ...formData, [name]: value })

  }
  // console.log(formData);
  const navigate = useNavigate();



  const userAuth = async (e) => {
    e.preventDefault();

    const { tableName, password } = formData
  

    axios
      .post('http://localhost:8080/login',{
        tableName, password 
    })
      .then((res) => {
          console.log(res);
        if (!res.data.error) {
          window.alert("signIn successfull");
          // console.log("registration sucess");
          navigate('/userpanel');
          
        }else{
        window.alert(res.data.error);

        }

      })
      .catch((err) => {
        console.log(err.response);
        window.alert("invalid registration");
        console.log("invalid registration");
        

      });


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
