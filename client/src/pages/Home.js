import s from "../css/Home.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../redux/Actions";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";

const Home = () => {
  let dispatch = useDispatch();
  let recipes = useSelector((state) => state.getRecipes);

  let [actualPage, setActualPage] = useState(1);
  let [recipesPerPage, setRecipesPerPage] = useState(9);
  let lastIndex = actualPage * recipesPerPage;
  let firstIndex = lastIndex - recipesPerPage;
  let recipesPage = recipes.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
      <div className={s.homeContainer}>
        {recipesPage &&
          recipesPage.map((e) => (
            <RecipeCard name={e.name} image={e.image} diets={e.diets} />
          ))}
      </div>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
    </>
  );
};

export default Home;
