const experss = require('express')
const userController = require('../controller/userController')
const jwtmiddleware = require('../middleware/jwtmiddleware')

const router = experss.Router()

router.post('/add',userController.addUserController)

router.post('/login',userController.loginUserController)

router.get("/alluser",jwtmiddleware,userController.allUserController)

router.get("/userdata",jwtmiddleware,userController.userDataController)

module.exports = router