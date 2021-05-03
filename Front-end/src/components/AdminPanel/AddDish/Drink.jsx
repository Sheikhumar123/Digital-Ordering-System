import React, { useState } from "react";
import axios from 'axios';

const Drink = () => {
  const [drink, setDrink] = useState({
    drinkName: '', priceForRegular: null, priceForHalf: null, priceForLiter: null
  })
  const [fileName, setFilename] = useState('');

  // const [dishType, setDishType] = useState('');

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let files = e.target.files


    if (files) {
      setFilename(files[0])
    }
    setDrink({ ...drink, [name]: value })

  }

  // const { drinkName, priceForRegular, priceForHalf, priceForLiter } = drink


  // console.log(data);
  // setFormData(data);
  // const file = e.target.files;
  // console.log(file[0]);
  // setDrink({ ...drink, catogeryPic: file[0] })

  // if (file) {
  //   setDrink({ ...drink, [name]: file[0] })
  // setDrink({ ...drink, [name]: file[0].name })

  // } else {
  // setDish({ ...dish, [name]: value })
  // }

  const addDrink = async (e) => {
    e.preventDefault();

    console.log(drink);
    // console.log(formData);

    const { drinkName, priceForRegular, priceForHalf, priceForLiter } = drink;
    console.log(drinkName, priceForRegular, priceForHalf, priceForLiter,);
    let formData = new FormData();
    formData.append('drinkName', drinkName);
    formData.append('priceForRegular', priceForRegular);
    formData.append('priceForHalf', priceForHalf);
    formData.append('priceForLiter', priceForLiter);
    formData.append('foodImage', fileName);
    console.log(FormData)
    const res = await fetch("/adddrink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: 
        formData
    })

    // });
    // axios
    //   .post('/adddrink', formData)
    //   .then((res) => {
    //     console.log(res.data);
    //     window.alert("registration sucessfull");
    //     console.log("registration sucess");

    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     window.alert("invalid registration");
    //     console.log("invalid registration");
        

    //   });

    const data = await res.json();
    console.log(data);
    if (data.error) {
      console.log(data.error);
          window.alert("invalid registration");
          console.log("invalid registration");

    } else {
      console.log(data);
          window.alert("registration sucessfull");
          console.log("registration sucess");
    }


  }




  return (
    <form method='POST' onSubmit={addDrink} className="formBody drinks" enctype="multipart/form-data">

      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input id="name" type="text" required name="drinkName" onChange={handleInput} />
          <label htmlFor="name">Name</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control">
          <input id="small" type="number" style={{ textAlign: 'center' }} name="priceForRegular" required onChange={handleInput} />
          <label htmlFor="small" style={{ textAlign: 'center' }}>Regular Price</label>
        </div>
        <div className="form-control">
          <input id="medium" style={{ textAlign: 'center' }} type="number" name="priceForHalf" required onChange={handleInput} />
          <label htmlFor="medium" style={{ textAlign: 'center' }}>Half Price</label>
        </div>
        <div className="form-control">
          <input id="large" style={{ textAlign: 'center' }} type="number" name="priceForLiter" required onChange={handleInput} />
          <label htmlFor="large" style={{ textAlign: 'center' }}>Liter Price</label>
        </div>
      </div>
      <div className="inputContianer">
        <div className="form-control">
          <input id="pic" type="file" filename="avatar" required onChange={handleInput} />
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

export default Drink;
