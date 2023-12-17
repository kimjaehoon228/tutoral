const express = require ('express');
const router = express.Router();
const rootDir = require('../utils/path');

router.get('/', (req,res,next) => {
    res.sendFile(path.join(rootDir,'view','User.html'));
});

router.get('/add', (req,res) => {
    res.sendFile(path.join(rootDir,'views','addUser.html'));
});

router.post('/add',(req,res)=>{
    console.log(req.body);
    console.log('post request')
    res.redirect('/');
});

module.exports = router;