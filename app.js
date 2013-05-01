// Require jojo and create a server
var exec = require('child_process').exec;
var gith = require('gith').create(8081);
var jojo = require('jojo'),
// jojo.createServer makes an express server and auto-uses jojo
    app = jojo.createServer(),
    express = jojo.express;
var path = require('path');

app.set('view options', { pretty: true });
app.set('view engine', 'jade');
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
