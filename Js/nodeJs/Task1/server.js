var http = require('http');
var url = require('url');

exports.start = function (router) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    response.writeHead(200,  {"Content-Type":  "text/plain"});
    response.write(router(pathname));
    response.end();
  }
  http.createServer(onRequest).listen(7324)
  console.log('Server Start')
}
