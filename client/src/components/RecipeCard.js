import s from "../css/RecipeCard.module.css";

const RecipeCard = ({ name, image, diets }) => {
  return (
    <div className={s.recipeCardContainer}>
      <div className={s.recipeCardImgContainer}>
        <img src={image} />
      </div>
      <h2>{name}</h2>
      <span>{diets}</span>
    </div>
  );
};

export default RecipeCard;
