var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("./main")).listen(8880, function(){
    console.log('Server running on 8080...');
});