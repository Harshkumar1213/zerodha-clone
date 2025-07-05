const { Signup, Login } = require('../Controller/AuthController')
const router = require('express').Router();
const {userVerification} = require('../Middleware/AuthMiddleware')

router.post('/verifyToken', userVerification); 
router.post('/signup', Signup)
router.post('/login', Login)

module.exports = router;

