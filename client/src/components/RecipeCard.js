import s from "../css/RecipeCard.module.css";

const RecipeCard = ({ name, image, diets }) => {
  return (
    <div className={s.recipeCardContainer}>
      <div className={s.recipeCardImgContainer}>
        <img src={image} />
      </div>
      <div className={s.recipeCardName}>
        <h4>Name</h4>
        <p>{name}</p>
      </div>
      <div className={s.recipeCardDiets}>
      <h4>Diets</h4>
      <p >{diets.join(', ').split('')}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
