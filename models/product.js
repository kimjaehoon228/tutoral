const fs =require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const getProductsFromFile = (callBack) => {
    const productsPath = path.join(rootDir, 'data', 'products.json');
    fs.readFile(productsPath, (error, productsData) => {
        if(error) {
            return callBack([]);
        }
            return callBack(JSON.parse(productsData));
    });
    };

exports.saveProduct = (product) => {
    const productsPath = path.join(rootDir, 'data', 'products.json');

    getProductsFromFile(productsData => {
        productsData.push(product);
        fs.writeFile(productsPath, JSON.stringify(productsData),(error) => {
            console.log(error);
        });
    });
};

exports.fetchAllProducts = (callBack) => {
    getProductsFromFile(callBack); 
};

exports.getProdutById = (productId,callBack) => {
    getProductsFromFile(products => {
        const product = products.find(p => p.id.toString() == productId);
        callBack(product);
    });
}