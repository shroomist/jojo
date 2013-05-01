// Require jojo and create a server
var jojo = require('jojo'),
// jojo.createServer makes an express server and auto-uses jojo
    app = jojo.createServer(),
    express = jojo.express;
var path = require('path');

app.set('view options', { pretty: true });
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8080);


console.log('Server is listening to http://127.0.0.1:8080');
