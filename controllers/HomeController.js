const { fetchAllProducts,getProdutById } = require("../models/product");

exports.getHomePage = (req,res)=>{
  fetchAllProducts((products) => {
    const viewsData = {
        products,
        pageTitle: '홈페이지-상품리스트'
};
    res.render('homepage', viewsData);
  });
};

exports.getProductDetailsPage = (req,res) => {
  const productId =req.params.productId;
  getProdutById(productId, product => {
    const viewsData ={
      product,
      pageTitle: product.title
    };
    res.render('ProductDetails',viewsData);
  });
};