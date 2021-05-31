
import './feedback.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";



export default function Feedback() {
    const [feedback, setfeedback] = useState([])


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
    }, [feedback])
    console.log(feedback);


    return (
        <div className="feedback-admin">
            <h1>Feedbacks</h1>
            <div className="feedback-Container">
              {feedback.map((feed,index)=>{
                  return(
                    <div className="feedBack-Form">
                    <div className='feedBack-control'>
                        <span>Phone:</span>
                        <div className="phone">O309123456</div>

                    </div>
                    <div className="feedBack-control">
                        <span>Quality:</span>
                        <div className='stars'> <ReactStars count={5} value={feed.quality} size={24} activeColor="#ffd700" /></div>

                    </div>
                    <div className="feedBack-control">
                        <span>Taste:</span>
                        <div className='stars'> <ReactStars count={5} value={feed.service} size={24} activeColor="#ffd700"  /></div>
                    </div>
                    <div className="feedBack-control">
                        <span>Comments:</span>
                        <div className="comments">{feed.comments}</div>
                    </div>
                </div>

                  )
              })}
      

                

            </div>
            

        </div>
    )
}