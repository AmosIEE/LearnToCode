var handler = require('./router.config.js');

exports.route = function (pathname) {
  var handle = handler.getHandler(pathname)
  if(typeof (handle) === 'function') {
    return handle()
  } else {
    return '404'
  }
};
