const express = require('express');
const router = express.Router();
const { getHomePage, getProductDetailsPage } = require('../controllers/HomeController');
const { postCartPage, getCartPage } = require('../controllers/CartController');

router.get('/', getHomePage);
router.get('/product/details/:productId',getProductDetailsPage);

router.post('/cart', postCartPage);
router.post('/cart', getCartPage);

module.exports = router;
