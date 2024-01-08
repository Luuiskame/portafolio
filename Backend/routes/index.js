const {Router} = require('express')

const postEmail = require('../controllers/postEmail')

const router = Router()

router.post('/send', postEmail)

module.exports = router