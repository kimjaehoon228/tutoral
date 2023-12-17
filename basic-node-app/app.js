const path = require('path');
const express =require('express');
const bodyParser = require('body-parser');

const adminRouters = require('./router/admin');
const homeRouters = require('./router/home');

const app = express();

app.use(bodyParser.urlencoded({ extended : false }));

app.use('/users', adminRouters);
app.use(homeRouters);

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000,()=>{
    console.log('server started at port 3000');
});


//https://www.youtube.com/watch?v=g5bRr7s-yeY