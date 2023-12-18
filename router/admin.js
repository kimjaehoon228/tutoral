const express = require ('express');
const router = express.Router();
const rootDir = require('../utils/path');
const productsData = require('../utils/products')

router.get('/', (req,res,next) => {
    res.sendFile(path.join(rootDir,'view','User.html'));
});

router.get('/add', (req,res) => {
const viewsData ={
    pageTitle: 'Add Product'
};
    res.render('Addproduct',viewsData);
});

router.post('/add',(req,res)=>{
    const product = {
       title: req.body.title
    };
    productsData.addProduct(product);
    res.redirect('/');
});

module.exports = router;