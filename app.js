// Require jojo and create a server
var exec = require('child_process').exec;
var gith = require('gith').create(8081);
var jojo = require('jojo');
//    express = jojo.express;
var path = require('path');
var express = require('express');
var stylus = require('stylus');

var app = express();
jojo.express = app;
app.use(stylus.middleware({
    debug: true,
    src: __dirname + '/views',
    dest: __dirname + '/public',
    compile: stylusCompile
}));
app.use(jojo);
function stylusCompile(str){
    console.log('stylus compiler');
    return stylus(str)
}


app.set('view engine', 'jade');
app.set('view options', { pretty: true });

app.use(express.static(path.join(__dirname, 'public')));


app.listen(8080);




function puts(error, stdout, stderr) { 
    console.log(stdout); 
    console.log('end transmisison') 
}

gith({
  repo: 'shroomist/jojo'
}).on( 'all', function( payload ) {
    console.log('Post Recieve happen' );
    exec("git pull", puts);
    console.log('execution finished');
});

console.log('Server is listening to http://127.0.0.1:8080');
