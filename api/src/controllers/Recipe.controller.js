require('dotenv').config()
const axios = require('axios')
const {Recipe, Diet} = require('../db')
//`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`

const getRecipesApi = async () => {
    try {
        
        let recipesApi = (await axios.get('https://558dfbed-2c18-4f89-b65b-538f13b0299e.mock.pstmn.io/recipes')).data.results
    
        let recipesApiFilter = recipesApi.map(e => {
            return {
                id: e.id,
                name: e.title,
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
        let recipesDB = await Recipe.findAll({include: {model: Diet, attributes: ['name']}})
        let recipesDBFilter = recipesDB.map(e => {
            return {
                id: e.id,
                name: e.name,
                image: e.image,
                diets: e.diets.map(e => e.name),
                summary: e.summary,
                healthScore: e.healthScore,
                steps: e.steps
            }
        })
        return recipesDBFilter
    } catch (error) {
        console.log(error)
    }
}

const getRecipes = async (req, res) => {
    try {
        let recipesApi = await getRecipesApi()
        let recipesDB = await getRecipesDB()
        console.log(recipesDB)
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

const createRecipe = async (req, res) => {
    try {
        let {name, summary, healthScore, image, steps, diets} = req.body
        if(!name || !summary) return res.send('Data is missing')
        let newRecipe = await Recipe.create({name, summary, healthScore, image, steps})
        let dietsPromise = await diets.map(async(e) => await Diet.findOne({where:{name: e}}))
        let dietsFinal = await Promise.all(dietsPromise)
        newRecipe.addDiets(dietsFinal)
        
        res.send(newRecipe)
        
    } catch (error) {
        console.log(error)
        res.send("It haven't created")
    }
}

const deleteRecipe = async (req, res) => {
    try {
        let {id} = req.params
        await Recipe.destroy({where: {id}})
        res.send('Deleted')
        
    } catch (error) {
        console.log(error)
        res.send("It haven't deleted")
    }
}

const updateRecipe = async (req, res) => {
    try {
        let {id} = req.params
        let {name, summary, healthScore, steps, diets} = req.body
        if(!name || !summary) return res.send('properties are missing')
        await Recipe.update({name, summary,healthScore, steps}, {where: {id}}) 
        let recipeUpdated = await Recipe.findOne({where: {id}})
        let dietsPromise = await diets.map(async(e) => await Diet.findOne({where: {name: e}}))
        let finalDiets = await Promise.all(dietsPromise)
        recipeUpdated.addDiets(finalDiets)

        res.send(recipeUpdated)
        
    } catch (error) {
        console.log(error)
        res.send("It haven't been updated")
    }
}
module.exports = {
    getRecipes,
    getRecipeByName,
    getRecipeById,
    createRecipe,
    deleteRecipe,
    updateRecipe
}