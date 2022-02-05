var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response){
    console.log(request.url);

    if(request.url ==='/'){
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + '\\index.html'));
        // __dirname + '\\index.html': html이 있는 경로
    }
    if(request.url==='/images'){
        fs.readFile('./images/sample2.jpg', function(err, data){
            console.log('picture loading...');
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
});
app.listen(3000);
