const express = require("express")
const router = express.Router();

const UserCollection = require("../Collections/users_collection")
const Middleware = require("../middleware/auth")

//router + peticion ( direction(path) , + method)
router.get('/', UserCollection.GetUsers)
router.get('/activeUser', Middleware, UserCollection.GetUser)
router.post('/', UserCollection.PostUsers)
router.put('/:idUser', UserCollection.PutUsers)
router.put('/isAdmin/:idUser', UserCollection.PutAdmin)
router.delete('/:idUser', UserCollection.DeleteUsers)


module.exports = router;