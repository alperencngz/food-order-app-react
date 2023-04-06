import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {

    const meal = props.meal;
    const price = `$${meal.price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{meal.name}</h3>
                <p className={classes.description}>{meal.description}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem;