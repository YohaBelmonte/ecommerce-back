const express = require("express")
const router = express.Router();
const Middleware= require ("../middleware/auth")

const ProductCollection = require("../collections/products_collections")


//router + peticion ( direction(path) , + method)
router.get('/', ProductCollection.GetProduct)
router.get('/:idProduct', ProductCollection.GetOneProduct)
router.post('/',Middleware, ProductCollection.PostProduct)
router.put('/:idProduct', ProductCollection.PutProduct)
router.delete('/:idProduct', ProductCollection.DeleteProduct)


module.exports = router;