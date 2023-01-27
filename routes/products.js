const express = require('express');

const router = express.Router()

const {getALLProductsStatic, getAllProducts} = require('../controllers/products')


router.route('/').get(getAllProducts)
router.route('/static').get(getALLProductsStatic)

module.exports = router