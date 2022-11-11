import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterCategories } from "../api";
import Loader from "../components/Loader";
import MealList from "../components/MealList";

const Category = () => {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getFilterCategories(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);
  return <>{!meals.length ? <Loader /> : <MealList meals={meals} />}</>;
};

export default Category;
