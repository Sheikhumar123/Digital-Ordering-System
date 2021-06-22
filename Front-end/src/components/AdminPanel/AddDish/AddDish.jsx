import './AddDish.css'
import React, { useState } from 'react'

// import formComponents
import Pizza from './Pizza';
import Drink from './Drink';
import Burger from './Burger';
import SpecialPizza from './SpecialPizza';
import IceCream from './IceCream';

const AddDish = () => {

    const [dish, setDish] = useState({
        dishType: '', dishName: '', dishIngri: "", priceForSmall: null, priceForMedium: null, priceForLarge: null 
    })

    const [dishType , setDishType] = useState('');

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setDishType(value);

      
        if (e.target.name === "picture") {
            const pic = e.target.files[0]
            setDish({ ...dish, [name]: pic })

        } else {
            setDish({ ...dish, [name]: value })
        }

    }

    

    return (
        <div className="AddDish_box">
            <div style={{width:"600px"}} className="AddDish_form" >
                <h1>Add New Dish</h1>
                <div className="radio">
                    <label>
                        <span>
                            <input type="radio" defaultChecked name="dishType" value="Pizza" onClick={handleInput} />
                        </span>
                        <span>Pizza</span>
                    </label>
                    <label>
                        <span>
                            <input type="radio" name="dishType" value="Drink" onClick={handleInput} />
                        </span>
                        <span>Drink</span>
                    </label>

                    <label>
                        <span>
                            <input type="radio" name="dishType" value="SpecialPizza" onClick={handleInput} />
                        </span>
                        <span>Special Pizza</span>
                    </label>

                    <label>
                        <span>
                            <input type="radio" name="dishType" value="Burger" onClick={handleInput} />
                        </span>
                        <span>Burger</span>
                    </label>
                    <label>
                        <span>
                            <input type="radio" name="dishType" value="IceCream" onClick={handleInput} />
                        </span>
                        <span>Icecream</span>
                    </label>

                </div>
                <div className="formBody">
                    {
                        dishType === 'Pizza' ? <Pizza/> : dishType === 'Drink' ? <Drink/> : dishType==='SpecialPizza' ? <SpecialPizza/> : dishType ==='Burger'? <Burger/> :dishType === 'IceCream' ? <IceCream/> :  <Pizza/>
                    }
                </div>
            </div>
        </div>
    )
}

export default AddDish
