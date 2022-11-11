import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "../components/Loader";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const { goBack } = useHistory();
  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);

  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = recipe;
  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
      {!idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={strMealThumb} alt={strMeal} />
          <h1>
            <b>Name:</b> {strMeal}
          </h1>
          <h5>
            <b>Category:</b> {strCategory}
          </h5>
          {strArea ? (
            <h5>
              <b>Area:</b> {strArea}
            </h5>
          ) : null}
          <p>{strInstructions}</p>
          <table>
            <thead>
              <tr>
                <td>Ingredient</td>
                <td>Measure</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          {strYoutube ? (
            <>
              <h5>Video Recipe</h5>
              <iframe
                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                title={idMeal}
                allowfullscreen
              ></iframe>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Recipe;
