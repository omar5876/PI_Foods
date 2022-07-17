const {Router} = require('express')
const { getDiets } = require('../controllers/diet.controller')

const router = Router()

router.get('/', getDiets)

module.exports = router