import React, { useCallback, useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import MealIteam from "./MealItem/MealItem";
import Card from "../UI/Card";

function AvailableMeals() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {

    try {

      const response = await fetch("https://food-order-app-1f0b9-default-rtdb.firebaseio.com/meals.json");
      setIsLoading(true);
      setError(null);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }

      setMeals(loadedMeals);


    } catch (error) {
      setError(error.message);
    };

    setIsLoading(false);
  }, [])

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  const mealList = meals.map((meal) => {
    return <MealIteam
      key={meal.id}
      meal={meal}
      id={meal.id} />
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