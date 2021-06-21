import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const IceCream = () => {
    const [icecream, setIcecream] = useState({
        dishName: "", priceForRegular: null, priceForLarge: null
    })
    const [fileName, setFilename] = useState('');
    const [secureUrl, setSecureUrl] = useState('');


    const handleInput = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let files = e.target.files


        if (files) {
            setFilename(files[0])
            
        }
        setIcecream({...icecream,[name]:value})

    }


    const addIceCream = async (e) => {
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
        let ImageLink = img.url
        setSecureUrl(ImageLink);


        const { dishName, priceForRegular, priceForLarge } = icecream;

console.log(secureUrl);

        if (secureUrl) {

            axios
                .post('http://localhost:8080/addicecream', {
                    dishName, priceForRegular, priceForLarge, secureUrl
                })
                .then((res) => {
                    console.log(res.data);
                    toast.success("registration Success");

                    console.log("registration sucess");
                    setFilename("")
                    setSecureUrl("");
                    setIcecream({
                        dishName: '', priceForRegular: null, priceForLarge: null, 
                    })

                })
                .catch((err) => {
                    console.log(err.response);
                    //  toast.error("invalid registration");
                    // console.log("invalid registration");


                });

        }

    }
    return (
        <form method='POST' onSubmit={addIceCream} className="formBody icecream" enctype="multipart/form-data">

            <div className="inputContianer">
                <div className="form-control" style={{ width: "100%" }}>
                    <input id="name" type="text" required name="dishName" onChange={handleInput} />
                    <label htmlFor="name">Name</label>
                </div>
            </div>

            <div className="inputContianer">
                <div className="form-control">
                    <input id="regular" type="number" style={{ textAlign: 'center' }} name="priceForRegular" required onChange={handleInput} />
                    <label htmlFor="regular" style={{ textAlign: 'center' }}>Regular Price</label>
                </div>
               
                <div className="form-control">
                    <input id="large" style={{ textAlign: 'center' }} type="number" name="priceForLarge" required onChange={handleInput} />
                    <label htmlFor="large" style={{ textAlign: 'center' }}>Large Price</label>
                </div>
            </div>
            <div className="inputContianer">
                <div className="form-control" style={{ width: "100%" }}>
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
    )
}

export default IceCream
