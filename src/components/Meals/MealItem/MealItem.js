import React from "react";

import classes from "./MealItem.module.css";

function MealIteam(props) {

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
                
            </div>
        </li>
    )
}

export default MealIteam;