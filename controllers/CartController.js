const { addProductToCart } = require('../models/cart');
const {getProdutById} = require('../models/product');

exports.postCartPage = (req, res) => {
    productId =req.body.productId;
    getProdutById(productId,(product) => {
    addProductToCart(productId, product.price);
    res.redirect('/')
    });
};

exports.getCartPage = (req, res) => {};