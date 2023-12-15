const express =require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended : false }));

app.use((req,res,next) => {
 console.log('Logging the request')
 next();
});


app.get('/users', (req,res,next) => {
    res.send('<h1>This is the users page');
});

app.get('/user/add', (req,res) => {
    res.send(`<form method="POST">
    <div><input name='username'/></div>
    <div><button>add user</button></div>
    </form>`);
});

app.post('/user/add',(req,res)=>{
    console.log(req.body);
    console.log('post request')
    res.redirect('/');
});

app.get('/',(req,res,next) => {
    res.send('<h1>This is the home page</h1>')
});


app.listen(3000,()=>{
    console.log('server started at port 3000');
});


//https://www.youtube.com/watch?v=g5bRr7s-yeY