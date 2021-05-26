import "./feedback.css";
import React, { useContext ,useState } from "react";
import ReactStars from "react-rating-stars-component";
import feedbackContext from "../../Context/feedbackContext";
import axios from 'axios';

const ShowFeedback = () => {
  let classNames = ["feedback"];

  const [quality , setqty] = useState('')
  const [service , setService] = useState('');
  const [comments,setComments] = useState('');

  const qualityRatingChanged = (newRating) => {
    setqty(newRating);
  };

  const serviceRatingChanged = (newRating) => {
    setService(newRating) ; 
  }

  const checkFeedback = useContext(feedbackContext);

  // show and hide cart
  if (checkFeedback[0].checkFeed === true) {
    classNames.push("showFeedback");
  } else {
    classNames.push("hideFeedback");
  }

  const hideFeedback = () => {
    checkFeedback[1]({ checkFeed: false });
    // console.log(qty,service,comments)
  };

  const submitFeedback = (e) =>{
      e.preventDefault();
      console.log("hello");
      axios
      .post('http://localhost:8080/addfeedback', {
          quality,
          service,
          comments
      })
      .then((res) => {
          console.log(res.data);
          window.alert("thanks for your feedback");
          console.log("registration sucess");

      })
      .catch((err) => {
          console.log(err.response);
          window.alert(err.response.data.error);
          console.log("invalid registration");


      });

  
  
  }


  return (
    <div className={classNames.join(" ")}>
      <div className="headercontainer">
        <div className="feedhead">
          <span>Feedback</span>
        </div>
        <div className="closeContainer" onClick={hideFeedback}>
          <img src="/delete.ico" alt="close" />
        </div>
      </div>

      <div className="feedBackForm">
          <form onSubmit={submitFeedback}>
              <div className="form-control">
                <span>Quality</span>  
                <ReactStars count={5} onChange={qualityRatingChanged} value="3" size={24} activeColor="#ffd700"/>
              </div>
              <div className="form-control">
                <span>Service</span>  
                <ReactStars count={5} onChange={serviceRatingChanged} size={24} activeColor="#ffd700"/>
              </div>
              <div className="form-control">
                <span style={{width:"100%"}}>Comments</span>  
                <textarea onChange={(e)=>setComments(e.target.value)} value={comments} cols="50" rows="5" style={{width:"100%", padding:"10px" , border:"1px solid gray" , fontSize:"1rem",margin:"10px"}}></textarea>
              </div>
              <div className="form-control" style={{justifyContent:"flex-end"}}>
                <button className="submit" type="submit"><i className="fas fa-paper-plane" aria-hidden="true"></i> Send</button>
              </div>
          </form>
      </div>
    </div>
  );
};

export default ShowFeedback;
