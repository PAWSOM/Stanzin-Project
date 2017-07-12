var express = require('express'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();
//var dbOperations = require("./js/dbOperations");
var logFmt = require("logfmt");
//app.set('views', __dirname + '/views') ;
app.use(express.static('./'));
app.get('/' , function(req,res) {
    res.sendfile('views/index.html');
} );
app.get('/db/getRole', function(req,res){
    dbOperations.getRole(req,res);
});
app.get('/db/setRole', function(req,res){
    dbOperations.setRole(req,res);
});
app.set('port', process.env.PORT || 3001);
app.use(express.static(__dirname + '/client'));  
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});