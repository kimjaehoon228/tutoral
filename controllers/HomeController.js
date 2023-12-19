const { fetchAllProducts } = require("../models/product");

exports.getHomePage = (req,res)=>{
  fetchAllProducts((products) => {
    const viewsData = {
        products,
        pageTitle: '홈페이지-상품리스트'
};
    res.render('homepage', viewsData);
  });
};
