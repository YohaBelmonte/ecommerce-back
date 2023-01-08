const express = require("express")
const router = express.Router();

const UserCollection = require("../collections/users_collection")


//router + peticion ( direction(path) , + method)
router.get('/', UserCollection.GetUsers)
router.post('/', UserCollection.PostUsers)
router.put('/:idUser', UserCollection.PutUsers)
router.delete('/:idUser', UserCollection.DeleteUsers)


module.exports = router;