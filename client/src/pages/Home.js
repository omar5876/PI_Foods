import s from "../css/Home.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clean, getRecipes } from "../redux/Actions";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";

const Home = () => {
  let dispatch = useDispatch();
  let recipes = useSelector((state) => state.getRecipes);
  
  let [actualPage, setActualPage] = useState(1);
  let [recipesPerPage, setRecipesPerPage] = useState(9);
  let lastIndex = actualPage * recipesPerPage;
  let firstIndex = lastIndex - recipesPerPage;
  let recipesPage = recipes.slice(firstIndex, lastIndex);

  let [sortRecipes, setSortRecipes] = useState()

  useEffect(() => {
    dispatch(getRecipes());
    return dispatch(clean())
  }, [dispatch]);
  return (
    <>
      <Searchbar setActualPage={setActualPage} setSortRecipes={setSortRecipes}/>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
      <div className={s.homeContainer}>
        {recipesPage &&
          recipesPage.map((e) => (
            <RecipeCard key={e.id} name={e.name} image={e.image} diets={e.diets} id={e.id}/>
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
