const { addProductToCart } = require('../models/cart');
const {getProductById} = require('../models/product');

exports.postCartPage = (req, res) => {
    productId =req.body.productId;
    getProductById(productId,(product) => {
    addProductToCart(productId, product.price);
    res.redirect('/')
    });
};

exports.getCartPage = (req, res) => {};