var requestHandler = require('./requestHandler');
var routeMap = {
  "/": requestHandler.start,
  "/start": requestHandler.start,
  "/upload": requestHandler.upload
}

exports.getHandler = function (pathname) {
  return routeMap[pathname]
};
