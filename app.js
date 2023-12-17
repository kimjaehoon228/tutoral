const path = require('path');
const express =require('express');
const bodyParser = require('body-parser');
const rootdir = require('./utils/path');

const adminRouters = require('./router/admin');
const homeRouters = require('./router/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//Static files
app.use(express.static(path.join(rootdir,'public')));
app.use('css',express.static(path.join(rootdir,'node_modules','bootstrap','dist','css')));
app.use(bodyParser.urlencoded({ extended : false }));

//Routes
app.use('/users', adminRouters);
app.use(homeRouters);


app.use((req,res) => {
    const viewsData = {
        pageTitle: '페이지 오류'
    };
    res.status(404).render('404',viewsData);
});

app.listen(3000,()=>{
    console.log('server started at port 3000');
});

