import React, { useState } from "react";

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
      setFilename(files[0]);
    }
    setDish({ ...dish, [name]: value });
  };

  const addBurger = async (e) => {
    e.preventDefault();

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

    console.log(
      dishName,
      dishIngri,
      price,
    );

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
            name="priceForSmall"
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
          />
          <label htmlFor="pic" style={{ textAlign: "center" }}></label>
        </div>
      </div>

      <div className="form-control" style={{ textAlign: "center" }}>
        <button className="learn-more" type="submit">
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Add Dish</span>
        </button>
      </div>
    </form>
  );
};

export default Burger;
