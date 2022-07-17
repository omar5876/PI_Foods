const {Router} = require('express')
const { getRecipes, getRecipeByName } = require('../controllers/Recipe.controller')
const router = Router()

router.get("/", getRecipes)
router.get('/name', getRecipeByName)

module.exports = router