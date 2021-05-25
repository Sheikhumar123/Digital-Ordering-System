// import './feedback.css';
import React, { useContext } from 'react';
import feedbackContext from '../../Context/CheckCartContext';

const ShowFeedback = () => {

    let classNames = ['cart'];

    const checkFeedback = useContext(feedbackContext);

    // show and hide cart
    if (checkFeedback[0].checkFeed === true) {
        classNames.push('showCart');
    } else {
        classNames.push('hideCart');
    }

    const hideCart = () => {
        checkFeedback[1]({ checkFeed: false });
    }

    return (
        <div className={classNames.join(' ')}>

            <div className="carthead">
                <span>Cart Items</span>
            </div>
            <div className="closeContainer" onClick={hideCart}><img src="/delete.ico" alt="close" /></div>

        </div>
    )
}

export default ShowFeedback;