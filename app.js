// Require jojo and create a server
var jojo = require('jojo'),
// jojo.createServer makes an express server and auto-uses jojo
    app = jojo.createServer(),
    express = jojo.express;
var path = require('path');

app.listen(8080);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

console.log('Server is listening to http://127.0.0.1:8080');
