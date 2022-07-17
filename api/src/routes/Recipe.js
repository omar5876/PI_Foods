const {Router} = require('express')
const { getRecipes, getRecipeByName, getRecipeById, createRecipe, deleteRecipe, updateRecipe } = require('../controllers/Recipe.controller')
const router = Router()

router.get("/", getRecipes)
router.get('/name', getRecipeByName)
router.get('/:id', getRecipeById)
router.post('/', createRecipe)
router.delete('/:id', deleteRecipe)
router.put('/:id', updateRecipe)

module.exports = router