const fs =require('fs');
const rootDir =require('../utils/path');
const path = require('path');

exports.addProductToCart = (productId,productprice) => {
    const cartPath = path.join(rootDir,'data','cart.json');
    fs.readFile(cartPath, (error, cartContent) => {
        let cart = { products : [], totalprice: 0 };

        if (!error) {
            cart =JSON.parse(cartContent);
        };
        let existingProductIndex = cart.products.findIndex((prod)=>prod.id.toString()==productId);
        let updatedProduct;

        if(existingProductIndex !== -1) {
            updatedProduct = { ...cart.products[existingProductIndex] };
            updatedProduct.quantity += 1;
            cart.products = [ ...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        } else {
            updatedProduct = { id : productId, quantity: 1 };
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalprice += +productprice;
        fs.writeFile(cartPath, JSON.stringify(cart),(error)=> {
            console.log(error);
        });
    });
};