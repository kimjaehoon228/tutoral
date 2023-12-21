const express = require ('express');
const { getAddProductPage,
        postAddProductPage,
        getAdminProductsPage,
        getEditproductPate,
        postEditProductPage,
        
      } = require('../controllers/admin/ProductController');

const router = express.Router();

router.get('/', getAdminProductsPage);
router.get('/add', getAddProductPage);
router.post('/add', postAddProductPage);
router.get('/edit/:productId', getEditproductPate);
router.post('/edit', postEditProductPage);
module.exports = router;



