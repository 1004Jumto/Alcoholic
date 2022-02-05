//main.js
var http = require('http');
var fs = require('fs');
var url = require('url');
const imgFolder = './images'; //데이터 폴더 경로
//__dirname + _url : 경로
//queryData : 쿼리 스트링
//response.end(template)를 해야 출력화면에 코드 작성한 것이 뜬다. template -> .html파일을 복붙한 변수.

var app = http.createServer(function(request, response) {

  var queryData = request.url;
  if (queryData === '/') {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + '\\index.html'));
    //__dirname + '\\index.html = C:\STUDY\방학(2)\웹사이트 제작 실전\술꾼분당여자들\index.html'
  }

  fs.readdir(imgFolder, function(err, filelist) {
    if(queryData === '/images'){
      for (var i = 0; i < filelist.length; i++) {
        fs.readFile(`./images/${filelist[i]}`, function(err, data){
          console.log('picture loading...');
          response.writeHead(200);
          response.write(data);
          response.end();
        });
      }
    }
  });

});
var port = 3000
app.listen(port);
console.log(`Server runnin;g at http://localhost:${port}/`);
