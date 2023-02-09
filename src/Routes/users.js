const express = require("express")
const router = express.Router();

const UserCollection = require("../collections/users_collection")
const Middleware = require("../middleware/auth")

//router + peticion ( direction(path) , + method)
router.get('/', UserCollection.GetUsers)
router.get('/activeUser', Middleware, UserCollection.GetUser)
router.post('/', UserCollection.PostUsers)
router.put('/:idUser', UserCollection.PutUsers)
router.delete('/:idUser', UserCollection.DeleteUsers)


module.exports = router;