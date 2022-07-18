require('dotenv').config()
const axios = require('axios')
const {Diet} = require('../db')

/* const getDietsApi = async() => {
    try {
        
        const dietsApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`)).data.results
        const dietsApiFilter = dietsApi.map(e => e.diets).flat()
       return [...new Set(dietsApiFilter)].map(e => ({name: e}))
    } catch (error) {
        console.log(error)
    }
}
let arrDietsApi = getDietsApi() */

const getDiets = async(req, res) => {
    try {
        let dietsApi = [
            {name:'gluten free'}, 
            {name:'dairy free'}, 
            {name:'lacto ovo vegetarian'}, 
            {name:'vagan'}, 
            {name:'paleolithic'}, 
            {name:'primal'}, 
            {name:'whole 30'},
            {name:'pescatarian'},
            {name:'ketogenic'},
            {name:'fodmap friendly'},
            {name:'vegetarian'}
        ]
        await Diet.bulkCreate(dietsApi)
        let dietsDB = await Diet.findAll()
        res.send(dietsDB)
    } catch (error) {
        console.log(error)

    }
} 



module.exports = {
    getDiets
}