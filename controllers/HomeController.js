const { fetchAllProducts,getProductById } = require("../models/product");

exports.getHomePage = (req,res)=>{
  fetchAllProducts((products) => {
    const viewsData = {
        admin: false,
        products,
        pageTitle: '홈페이지-상품리스트'
};
    res.render('product-list', viewsData);
  });
};

exports.getProductDetailsPage = (req,res) => {
  const productId =req.params.productId;
  getProductById(productId, product => {
    const viewsData ={
      product,
      pageTitle: product.title
    };
    res.render('ProductDetails',viewsData);
  });
};