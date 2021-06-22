import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';


const Burger = () => {
  
    const [dish, setDish] = useState({
    dishType: "Burger",
    dishName: "",
    dishIngri: "",
    price:"",
  });

  const [fileName, setFilename] = useState("");
  const [secureUrl, setSecureUrl] = useState("");

  const handleInput = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let files = e.target.files;


    if (files) {
      if (files[0].type == "image/png") {
        console.log("it is png");
        setFilename(files[0]);
      }
    }
    setDish({ ...dish, [name]: value });
  };

  const addBurger = async (e) => {
    e.preventDefault();
    
    console.log(dish);

    const data = new FormData();
    data.append("file", fileName);
    data.append("upload_preset", "x4bnkskk");
    data.append("cloud_name", "sheikhumar");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/sheikhumar/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const img = await res.json();
    console.log(img);
    let ImageLink = img.url;
    setSecureUrl(ImageLink);

    console.log(secureUrl);

    const {
      dishName,
      dishIngri,
      price,
    } = dish;


    if(secureUrl){

      axios
        .post('http://localhost:8080/addburger', {
          dishName, dishIngri, price, secureUrl
        })
        .then((res) => {
          console.log(res.data);
          setFilename("")
          setSecureUrl("");
          setDish({
            drinkName: '', priceForRegular: null, priceForHalf: null, priceForLiter: null
          })
          toast.success("registration Success");
        
          console.log("registration sucess");
  
        })
        .catch((err) => {
          console.log(err.response);
           toast.error("invalid registration");
          // console.log("invalid registration");
  
  
        });

    }


    

  };
  return (
    <form method="POST" onSubmit={addBurger} className="formBody">
      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input
            id="name"
            type="text"
            required
            name="dishName"
            onChange={handleInput}
          />
          <label htmlFor="name">Name</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input
            id="ingridiets"
            type="text"
            name="dishIngri"
            required
            onChange={handleInput}
          />
          <label htmlFor="ingridients">Ingridients</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control" style={{width:"100%"}}>
          <input
            id="small"
            type="number"
            style={{ textAlign: "left" }}
            name="price"
            required
            onChange={handleInput}
          />
          <label htmlFor="small" style={{ textAlign: "Left" }}>
            Price
          </label>
        </div>
      </div>
      <div className="inputContianer">
        <div className="form-control" style={{width:"100%"}}>
          <input
            id="pic"
            type="file"
            filename="avatar"
            required
            onChange={handleInput}
            accept="image/png"
          />
          <label htmlFor="pic" style={{ textAlign: "center" }}></label>
        </div>
      </div>

      <div className="form-control" style={{ textAlign: "center" }}>
        <button className="learn-more" type="submit">
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text" onClick={addBurger}>Add Dish</span>
        </button>
      </div>
    </form>
  );
};

export default Burger;
