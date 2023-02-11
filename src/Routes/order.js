const express = require("express")
const router = express.Router();

const OrderCollection = require("../collections/order_collection")


//router + peticion ( direction(path) , + method)
// router.get('/', OrderCollection.GetProduct)
router.post('/', OrderCollection.PostProduct)
router.put('/:idProduct', OrderCollection.PutProduct)
router.delete('/:idProduct', OrderCollection.DeleteProduct)


module.exports = router;