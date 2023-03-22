const express = require("express")
const router = express.Router();
const Middleware= require ("../middleware/auth")

const ProductCollection = require("../Collections/products_collections")


//router + peticion ( direction(path) , + method)
router.get('/', ProductCollection.GetProduct)
// router.get('/:idProduct', ProductCollection.GetOneProduct)
router.get('/cart',Middleware, ProductCollection.GetCartProduct)
router.post('/',Middleware, ProductCollection.PostProduct)
router.put('/:idProduct', ProductCollection.PutProduct)
router.put('/add/:idProduct',Middleware, ProductCollection.PutAddProduct)
router.put('/remove/:idProduct',Middleware, ProductCollection.PutRemoveProduct)
router.delete('/:idProduct', ProductCollection.DeleteProduct)


module.exports = router;