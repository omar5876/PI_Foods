const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require('./Recipe')
const dietRouter = require('./Diet')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipeRouter)
router.use('/diets', dietRouter)


module.exports = router;
