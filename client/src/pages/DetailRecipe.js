import s from "../css/DetailRecipe.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clean, getRecipesById } from "../redux/Actions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const DetailRecipe = () => {
  let { id } = useParams();
  let detailRecipe = useSelector((state) => state.getRecipeByID);
  console.log(detailRecipe);
  let dispatch = useDispatch();

  const stripHtml = (html) => {
    let tmp = document.createElement("DIV");     //Function that removes tags html from string
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  useEffect(() => {
    dispatch(getRecipesById(id));
    return dispatch(clean())
  }, [dispatch, id]);
  return (
    <>
    {!detailRecipe.name? <Loading/>:
    <div className={s.detailRecipeContainer}>
      {typeof detailRecipe.id === "string" && <button>Delete</button>}
      {typeof detailRecipe.id === "string" && <Link to={`/Update/${detailRecipe.id}`}><button>Update</button></Link>}
      <div className={s.detailRecipeImgContainer}>
        <img src={detailRecipe.image} alt={detailRecipe.name} />
      </div>
      <div>
        <h4>Name:</h4>
        <p>{detailRecipe.name}</p>
      </div>

      {detailRecipe.hasOwnProperty('dishTypes') && (
        <div>
          <h4>Dish Types:</h4>
          {detailRecipe.dishTypes.map((e, k) => (
            <span key={k}>{e}</span>
          ))}
        </div>
      )}
      {detailRecipe.hasOwnProperty('diets') && (
        <div>
          <h4>Diets:</h4>
          {detailRecipe.diets.map((e, k) => (
            <span key={k}>{e}</span>
          ))}
        </div>
      )}
      <div>
        <h4>Summary:</h4>
        <p>{stripHtml(detailRecipe.summary)}</p>
      </div>
      <div>
        <h4>Health Score:</h4>
        <span>{detailRecipe.healthScore}</span>
      </div>
      {detailRecipe.hasOwnProperty('steps') && <div>
        <h4>Steps</h4>
        {detailRecipe.steps.map((e, k) => <div key={k}><h5>Step {e.number}</h5><p>{e.step}</p></div>)}
        </div>}
    </div>
    }
    </>
  );
};

export default DetailRecipe;
