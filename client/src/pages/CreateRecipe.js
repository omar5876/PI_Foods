import s from '../css/CreateRecipe.module.css'

const CreateRecipe = () => {
    return (
        <div className={s.createRecipeContainer}>
            Create Recipe
            <form>
                <label>Name</label>
                <input type={'text'}/>
            </form>
        </div>
    )
}

export default CreateRecipe