import './Admin.css';
import React from "react";
import Header from "./Header/Header.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import { Outlet } from "react-router-dom";


const Admin = () => {
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
