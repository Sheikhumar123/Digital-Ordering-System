import './feedback.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";



export default function Feedback() {
    const [feedback, setfeedback] = useState()


    const getData = async () => {

        try {
            const response = await axios.get('/getfeedback');
            setfeedback(response.data.data)

        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        getData()
    }, [])
    console.log(feedback);


    return (
        <div className="feedbackadmin">
            <div className="feedbackContainer">
                <h1>Here Comes Feedbacks</h1>
                <div className="feedBackForm">
                <form >
                <div className="form-control">
                    <span>Quality</span>
                    <ReactStars count={5} value="3" size={24} activeColor="#ffd700" />
                </div>
                <div className="form-control">
                    <span>Service</span>
                    <ReactStars count={5} size={24} activeColor="#ffd700" />
                </div>
                <div className="form-control">
                    <span style={{ width: "100%" }}>Comments</span>
                   <p>hello</p>
                </div>
                
            </form>

                </div>
            </div>
            
        </div>
    )
}
