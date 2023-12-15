const fs = require('fs');

const routes = (req, res) => {
    if (req.url = '/') {
        return setHomePage(req,res);
    }

    if(req.url =='/username' && req.method.toLowerCase() == 'post'){
        return submitUserName(req,res);
    }
}

function submitUserName(req, res){
    res.setHeader(`Content-Type`, 'text/html');
    //데이터저장
    const body=[];
    req.on('data',(data)=>{
        body.push(data);
    });

    req.on('end',()=>{
        console.log(body);
        const requestBody = Buffer.concat(body).toString();
        const userName = requestBody.split('=')[1];
        console.log(requestBody);

        fs.writeFile('username.txt',userName, () => {
          //홈페이지 redirect
        res.statusCode =302;
        res.setHeader('Location','/');
        return res.end();
        });
    });
}


function setHomePage(req,res){
    res.setHeader('Content-type', 'text/html');
     return res.end(`
     <!doctype html>
     <html>
     <head>
     <title>yandi web dev</title>
     </head>
     <body>
     <form action="/username" type="post">
     <div>
        <label>Enter User name</label>
        <input type="text" name="username"/>
     </div>
     <div>
        <input type="submit" value="send"/>
     </div>
     </form>
     </body>
     </html>
     `);
    }


module.exports = {
    routes,
    text : 'Hai Leela'
}