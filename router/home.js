const path = require ('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const productsData = require('../utils/products');

router.get('/',(req,res) => {
    const viewsData = {
        products : productsData.products,
        pageTitle: '홈페이지-상품리스트'
    };
    res.render('homepage', viewsData);
});

module.exports = router;
