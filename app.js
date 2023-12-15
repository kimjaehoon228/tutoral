const http =require('http');

const server =http.createServer((req,res)=>{
 res.setHeader('Content-Type', 'text/json');
 res.write('<html>');
 res.write('<head><title>Y&I Web dav</title></head>');
 res.write('<body><h1>Hello Y&I web sites</h1></boby>');
 res.end('</html>');
});

server.listen(3000);