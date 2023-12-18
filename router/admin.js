const express = require ('express');
const { getAddProductPage, postAddProductPage } = require('../controllers/admin/ProductController');

const router = express.Router();

router.get('/add', getAddProductPage);

router.post('/add', postAddProductPage);

module.exports = router;



// https://www.youtube.com/watch?v=DptEN_DxQb8&list=PL_euSNU_eLbdf5XbrFl-nOw6-7ZtT27Bn&index=21