const {Router} = require('express')
const { getRecipes, getRecipeByName, getRecipeById } = require('../controllers/Recipe.controller')
const router = Router()

router.get("/", getRecipes)
router.get('/name', getRecipeByName)
router.get('/:id', getRecipeById)

module.exports = router