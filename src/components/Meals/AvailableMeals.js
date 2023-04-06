import React from "react";

import classes from "./AvailableMeals.module.css";
import MealIteam from "./MealItem/MealItem";
import Card from "../UI/Card";

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

  const mealList = AVILABLE_MEALS.map((meal) => {
    return <MealIteam key={meal.id} meal={meal} id={meal.id}/>
  })

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;