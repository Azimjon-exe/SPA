import React from "react";
import MealItem from "./MealItem";

const MealList = ({ meals }) => {
  return (
    <div className="cardList">
      {meals.map((el) => (
        <MealItem key={el.idMeal} {...el} />
      ))}
    </div>
  );
};

export default MealList;
