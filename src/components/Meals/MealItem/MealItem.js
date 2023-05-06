import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {

    const cartCtx = useContext(CartContext);

    const meal = props.meal;
    const price = `$${meal.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{meal.name}</h3>
                <p className={classes.description}>{meal.description}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    )
}

export default MealItem;