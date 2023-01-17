const express = require("express")
const router = express.Router();

const ProductCollection = require("../collections/products_collections")


//router + peticion ( direction(path) , + method)
router.get('/', ProductCollection.GetProduct)
router.get('/:idProduct', ProductCollection.GetOneProduct)
router.post('/', ProductCollection.PostProduct)
router.put('/:idProduct', ProductCollection.PutProduct)
router.delete('/:idProduct', ProductCollection.DeleteProduct)


module.exports = router;