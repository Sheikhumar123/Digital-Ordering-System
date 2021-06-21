import React, { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const Pizza = () => {

  const [dish, setDish] = useState({
    dishType: 'pizza', dishName: '', dishIngri: "", priceForSmall: null, priceForMedium: null, priceForLarge: null
  })
  const [fileName, setFilename] = useState('');
  const [secureUrl, setSecureUrl] = useState('');

  // const [dishType, setDishType] = useState('');
  const handleInput = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let files = e.target.files


    if (files) {
      if (files[0].type == "image/png") {
        console.log("it is png");
        setFilename(files[0]);
      }
    }
    setDish({ ...dish, [name]: value })

  }

  const addPizza = async (e) => {
    
    e.preventDefault();

    const data = new FormData();
    data.append("file", fileName);
    data.append("upload_preset", "x4bnkskk");
    data.append("cloud_name", "sheikhumar");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/sheikhumar/image/upload`,
      {
        method: "POST",
        body: data
      }
    );
    const img = await res.json();
    console.log(img);
    let ImageLink = img.url
    setSecureUrl(ImageLink);
    console.log(secureUrl);

  const { dishName,dishIngri, priceForSmall, priceForMedium, priceForLarge } = dish;
    console.log(dishName,dishIngri, priceForSmall, priceForMedium, priceForLarge);

    axios
      .post('http://localhost:8080/addpizza', {
        dishName,dishIngri, priceForSmall, priceForMedium, priceForLarge, secureUrl
      })
      .then((res) => {
        console.log(res.data);
        toast.success("registration sucessfull");
        console.log("registration sucess");

      })
      .catch((err) => {
        console.log(err.response);
        toast.error("invalid registration");
        console.log("invalid registration");
        

      });
  }
  return (
    <form method='POST' onSubmit={addPizza} className="formBody">

      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input id="name" type="text" required name="dishName" onChange={handleInput} />
          <label htmlFor="name">Name</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input id="ingridiets" type="text" name="dishIngri" required onChange={handleInput} />
          <label htmlFor="ingridients">Ingridients</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control">
          <input id="small" type="number" style={{ textAlign: 'center' }} name="priceForSmall" required onChange={handleInput} />
          <label htmlFor="small" style={{ textAlign: 'center' }}>Small Price</label>
        </div>
        <div className="form-control">
          <input id="medium" style={{ textAlign: 'center' }} type="number" name="priceForMedium" required onChange={handleInput} />
          <label htmlFor="medium" style={{ textAlign: 'center' }}>Medium Price</label>
        </div>
        <div className="form-control">
          <input id="large" style={{ textAlign: 'center' }} type="number" name="priceForLarge" required onChange={handleInput} />
          <label htmlFor="large" style={{ textAlign: 'center' }}>Large Price</label>
        </div>
      </div>
      <div className="inputContianer">
        <div className="form-control" style={{width:"100%"}}>
          <input id="pic" type="file" accept='image/png' filename="avatar" required onChange={handleInput} />
          <label htmlFor="pic" style={{ textAlign: 'center' }}></label>
        </div>
      </div>

      <div className="form-control" style={{ textAlign: 'center' }}>
        <button className="learn-more" type='submit'>
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Add Dish</span>
        </button>
      </div>

    </form>
  );
};

export default Pizza;
