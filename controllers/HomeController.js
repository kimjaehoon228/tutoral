const { products } = require('../utils/products');

exports.getHomePage = (req,res)=>{
    const viewsData = {
        products,
        pageTitle: '홈페이지-상품리스트'
};
    res.render('homepage', viewsData);
};
