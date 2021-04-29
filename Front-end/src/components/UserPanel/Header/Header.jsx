import './Header.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
    // here i use useLocation hooks to get the data coming from the route 
    let location = useLocation();
    return (
        <div className="header">
            <h1>Digital Ordering System</h1>
            <h3>{location.state}</h3>
        </div>
    )
}
