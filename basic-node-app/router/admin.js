const express = require ('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.send('<h1>This is the users page</h1>');
});

router.get('/add', (req,res) => {
    res.send(`<form method="POST">
    <div><input name='username'/></div>
    <div><button>add user</button></div>
    </form>`);
});

router.post('/add',(req,res)=>{
    console.log(req.body);
    console.log('post request')
    res.redirect('/');
});

module.exports = router;