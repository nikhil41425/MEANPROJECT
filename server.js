const http = require('http');
const debug=require('debug')("node-angular");
const app=require('./Backend/app');

const port=process.env.PORT || 3000 ;

app.set('port',port);

var server=http.createServer(app);

server.listen(port);

