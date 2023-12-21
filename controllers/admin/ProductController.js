const { saveProduct,
     fetchAllProducts, 
     getProductById, 
     updateProductByid } = require("../../models/product");

exports.getAddProductPage = (req,res)=>{
    const viewsData ={
        edit: false,
        pageTitle: 'Add Product'
    };
    res.render('AddProduct', viewsData)
};

exports.postAddProductPage = (req,res)=>{
    const product = {
       id : Date.now(),
       title: req.body.title,
       image: req.body.image,
       price: req.body.price,
       description: req.body.description
    };
    saveProduct(product);
    res.redirect('/');
};

exports.getAdminProductsPage = (req,res) => {
    fetchAllProducts((products) => {
        const viewsData = {
            admin: true,
            pageTitle : 'Admin Products',
            products
        };
        res.render('product-list',viewsData);
    });
};


exports.getEditproductPate = (req,res) => {
    const productId = req.params.productId;

    getProductById(productId, (product) => {
        const viewsData = {
            edit: true,
            product,
            pageTitle : 'Edit Product',         
        };
        res.render('Addproduct',viewsData);
    });
};

exports.postEditProductPage = (req, res) => {
    console.log(req.body);
    const product = {
        id: req.body.productId,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image
    };
    updateProductByid(product, req.body.productId);
    res.redirect('/products');
};