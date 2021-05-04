import React , {useState} from "react";
import axios from "axios"

const SpecialPizza = () => {

  const [dish, setDish] = useState({
    dishType: 'pizza', dishName: '', dishIngri: "", priceForSmall: null, priceForMedium: null, priceForLarge: null
  })

 const [fileName, setFilename] = useState('');


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let files = e.target.files


    if (files) {
      setFilename(files[0])
    }
    setDish({ ...dish, [name]: value })

  }
  // console.log(dish);

  const addSpecialPizza = async (e) => {

    e.preventDefault();
    // console.log("hello");

    const { dishName,dishIngri, priceForSmall, priceForMedium, priceForLarge } = dish;
    console.log(dishName,dishIngri, priceForSmall, priceForMedium, priceForLarge);
    let formData = new FormData();
    formData.append('dishName', dishName);
    formData.append('dishIngri', dishIngri);
    formData.append('priceForSmall', priceForSmall);
    formData.append('priceForMedium', priceForMedium);
    formData.append('priceForLarge', priceForLarge );
    formData.append('avatar', fileName);
    console.log(formData)
  



    axios
      .post('http://localhost:8080/addspecialpizza', formData)
      .then((res) => {
        console.log(res.data);
        window.alert("registration sucessfull");
        console.log("registration sucess");

      })
      .catch((err) => {
        console.log(err.response);
        window.alert("invalid registration");
        console.log("invalid registration");
        

      });



    // const { dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge } = dish;
    // console.log( dishName, dishIngri, priceForSmall, priceForMedium, priceForLarge);
    //     const res = await fetch("/addspecialpizza", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },

    //         body: JSON.stringify({
    //             dishName,
    //             dishIngri,
    //             priceForSmall,
    //             priceForMedium,
    //             priceForLarge,

    //         })
    //     });

    //     const data = await res.json();
    //     console.log(data);
    //     if (data.error) {
    //         window.alert("invalid registration");
    //         console.log("invalid registration");

    //     } else {
    //         window.alert("registration sucessfull");
    //         console.log("registration sucess");
    //     }

  }
  return (
    <form method='POST'onSubmit={addSpecialPizza} className="formBody">
      
      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input id="name" type="text" required name="dishName" onChange={handleInput}/>
          <label htmlFor="name">Name</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control" style={{ width: "100%" }}>
          <input id="ingridiets" type="text" name="dishIngri" required onChange={handleInput}/>
          <label htmlFor="ingridients">Ingridients</label>
        </div>
      </div>

      <div className="inputContianer">
        <div className="form-control">
          <input id="small" type="number" style={{ textAlign: 'center' }} name="priceForSmall" required onChange={handleInput}/>
          <label htmlFor="small" style={{ textAlign: 'center' }}>Small Price</label>
        </div>
        <div className="form-control">
          <input id="medium" style={{ textAlign: 'center' }} type="number" name="priceForMedium" required onChange={handleInput}/>
          <label htmlFor="medium" style={{ textAlign: 'center' }}>Medium Price</label>
        </div>
        <div className="form-control">
          <input id="large" style={{ textAlign: 'center' }} type="number" name="priceForLarge" required onChange={handleInput}/>
          <label htmlFor="large" style={{ textAlign: 'center' }}>Large Price</label>
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

export default SpecialPizza;
