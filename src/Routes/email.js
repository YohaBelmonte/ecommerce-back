const router = require ('express').Router();
const emailCollection = require('../Collections/email_collections')
const AuthMiddleware = require('../middleware/auth')

router.get('/', AuthMiddleware, emailCollection.EmailGet)
router.post('/', AuthMiddleware, emailCollection.EmailPost)

module.exports = router;