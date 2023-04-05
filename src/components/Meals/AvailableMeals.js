import React from "react";

import classes from "./AvailableMeals.module.css";

const AVILABLE_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]

function AvailableMeals() {
  return (
    <div className={classes.meals}>
      <ul>
        {AVILABLE_MEALS.map((meal) => {
          return (
            <li key={meal.id}>
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
              <p>${meal.price}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AvailableMeals;