import React from "react";
import "./CheifPanel.css";
import Header from './Header/Header'
import OrderCard from './OrderCard/OrderCard';
export default function ChefPanel(){
    return(
        <div className="cheif-main" >
            <Header/>
             <OrderCard />
        </div>

    )
}