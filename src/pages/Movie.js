import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const { goBack } = useHistory();
  return (
    <div>
      <h1>Some Movies {id}</h1>
      <button className="btn" onClick={goBack}>
        goBack
      </button>
    </div>
  );
};

export default Movie;
