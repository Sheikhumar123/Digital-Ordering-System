import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <div className="adminheader">
      <div>
        <img src="/pizza.png" alt="img not found" />
        <h1>Reception Panel</h1>
      </div>
      <button> <i class="fas fa-sign-out-alt"></i> logout</button>
    </div>
  );
}
