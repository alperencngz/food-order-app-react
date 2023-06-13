import React, { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import MealIteam from "./MealItem/MealItem";
import Card from "../UI/Card";

function AvailableMeals() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchMeals = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://food-order-app-1f0b9-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };


      fetchMeals().catch((error) => {
        setIsLoading(false);
        setError(error.message)
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Meals are loading...</p>
      </section>
    );
  }

  if (error) {
    return <section className={classes.MealsError}>
      <p>{error}</p>
    </section>
  }


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