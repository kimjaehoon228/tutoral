const express = require ('express');
const { getAddProductPage,
        postAddProductPage,
        getAdminProductsPage,
        getEditProductPate,
        postEditProductPage,
        postDeleteProductPage
      } = require('../controllers/admin/ProductController');

const router = express.Router();

router.get('/', getAdminProductsPage);
router.get('/add', getAddProductPage);
router.post('/add', postAddProductPage);
router.get('/edit/:productId', getEditProductPate);
router.post('/edit', postEditProductPage);
router.post('/delete', postDeleteProductPage);
module.exports = router;



