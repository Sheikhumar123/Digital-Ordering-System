import "./Admin.css";
import React, { useEffect } from "react";
import Header from "./Header/Header.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {firebase} from "../../firebase"
import {toast} from "react-toastify";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var callBillRef = firebase.database().ref('callBill/');
    callBillRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        toast.info(data.message, {
          position: "top-left",
        });
      }
    });

    var callWaiterRef = firebase.database().ref('callWaiter/');
    callWaiterRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        toast.info(data.message, {
          position: "top-left",
        });
      }
    });

    var readyOrderRef = firebase.database().ref('chefToAdmin/');
    readyOrderRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        toast.info(data.message, {
          position: "top-left",
        });
      }
    });

  },[]);


  useEffect(() => {
    if (Cookies.get("name")) {
      if (Cookies.get("name") === "admin") {
        console.log('Already there..!')
      } else if (Cookies.get("name") === "chef") {
        navigate("/chefpanel");
      } else {
        navigate('/userpanel')
      }
    } else {
      navigate("/");
    }
  },[]);

  return (
    <div className="adminContainer">
      <Header />
      <div className="adminContent">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
