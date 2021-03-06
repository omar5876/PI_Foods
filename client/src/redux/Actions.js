import axios from 'axios'

export const GET_RECIPES = 'getRecipes';
export const GET_RECIPES_BY_ID = "getRecipesById";
export const GET_RECIPES_BY_NAME = "getRecipesByName"
export const GET_DIETS = 'getDiets'
export const ORDER = 'order'
export const FILTER = 'filter'
export const CLEAN = 'clean'


export const getRecipes = () => {
    return async (dispatch) => {
        let recipes = (await axios.get('http://localhost:3001/recipes')).data
        return dispatch({
            type: GET_RECIPES,
            payload: recipes
        })
    }
}

export const getRecipesById = (id) => {
    return async (dispatch) => {
            let recipeById = (await axios.get(`http://localhost:3001/recipes/${id}`)).data
            return dispatch({
                type: GET_RECIPES_BY_ID,
                payload: recipeById
            })
    }
}

export const getRecipeByName = (name) => {
    return async (dispatch) => {
        let recipeByName = (await axios.get(`http://localhost:3001/recipes/name?name=${name}`)).data
        return dispatch({
            type: GET_RECIPES_BY_NAME,
            payload: recipeByName
        })
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        let diets = (await axios.get('http://localhost:3001/diets')).data
        return dispatch({
            type: GET_DIETS,
            payload: diets
        })
    }
}

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const filter = (filter) => {
    return {
        type: FILTER,
        payload: filter
    }
}

export const clean = () => {
    return {
        type: CLEAN
    }
}