import React, { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  console.log(catalog);

  return (
    <>{!catalog.length ? <Loader /> : <CategoryList catalog={catalog} />}</>
  );
}
