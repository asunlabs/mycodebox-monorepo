const { Router } = require('express')
const controllers = require('../controllers/controllers')

const router = Router()

// signup router
router.get('/signup', controllers.signup_get)
router.post('/signup', controllers.signup_post)

// login router
router.get('/login', controllers.login_get)
router.post('/login', controllers.login_post)

module.exports = router