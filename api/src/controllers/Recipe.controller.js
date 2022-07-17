require('dotenv').config()
const axios = require('axios')
const {Recipe} = require('../db')

const getRecipesApi = async () => {
    try {
        
        let recipesApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`)).data.results
    
        let recipesApiFilter = recipesApi.map(e => {
            return {
                id: e.id,
                title: e.title,
                image: e.image,
                dishTypes: e.dishTypes,
                diets: e.diets,
                summary: e.summary,
                healthScore: e.healthScore,
                steps: e.analyzedInstructions[0]?.steps.map(i => ({number: i.number, step: i.step}))
            }
        })
    
        return recipesApiFilter
    } catch (error) {
        console.log(error)
    }
}
const getRecipesDB = async () => {
    try {
        let recipesDB = await Recipe.findAll()
        return recipesDB
    } catch (error) {
        console.log(error)
    }
}

const getRecipes = async (req, res) => {
    try {
        let recipesApi = await getRecipesApi()
        let recipesDB = await getRecipesDB()
        res.send([...recipesApi, ...recipesDB])
    } catch (error) {
        console.log(error)
    }
}

const getRecipeByName = async(req, res) => {
    try {
        let {name} = req.query
        let recipesApi = await getRecipesApi()
        let recipesDB = await getRecipesDB()
        let recipeFound = [...recipesApi, ...recipesDB].filter(e => e.title.toLowerCase().includes(name.toLowerCase()))
        if(!recipeFound.length) return res.send('Recipe not found')
        res.send(recipeFound)
    } catch (error) {
        console.log(error)
    }
}

const getRecipeById = async (req, res) => {
    try {
        let recipeFound;
        let {id} = req.params
        if(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(id)){
            let recipesDB = await getRecipesDB()
            recipeFound = recipesDB.find(e => e.id === id)
            return res.send(recipeFound)

        }
        else{
            let recipesApi = await getRecipesApi()
            recipeFound = recipesApi.find(e => e.id === Number(id))
            return res.send(recipeFound)

        }
    } catch (error) {
        console.log(error)
        res.send('Recipe not found')
    }
}

const createRecipe = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.send("It haven't created")
    }
}
module.exports = {
    getRecipes,
    getRecipeByName,
    getRecipeById
}