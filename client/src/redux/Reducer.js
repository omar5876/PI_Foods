import { GET_DIETS, GET_RECIPES, GET_RECIPES_BY_ID, GET_RECIPES_BY_NAME } from "./Actions"

const initialState = {
    getRecipes : [],
    allRecipes : [],
    getRecipeDetails: {},
    getRecipeByID: {},
    getRecipeByName: {},
    getDiets: []
}




const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_RECIPES:
            return {
                ...state,
                getRecipes: action.payload,
                allRecipes: action.payload
            }
        case GET_RECIPES_BY_ID:
            return {
                ...state,
                getRecipeByID: action.payload
            }
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                getRecipeByName: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                getDiets: action.payload
            }
        default:
            return state
    }
}



export default reducer