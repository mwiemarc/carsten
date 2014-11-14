var express    = require('express');
var bodyParser = require('body-parser');
var http       = require('http');
var fs         = require('fs');
var path       = require('path');

//set context
var context        = {};
context.config     = require('./config');
context.app        = express();
context.sockets    = [];
context.rest       = new require('node-rest-client').Client();

console.log('\n\n*------ CONFIGURATION ------*' +
'\nPort: ', context.config.port +
'\nDefault channel: ' + context.config.defaultChannel +
'\nQueue time: ', context.config.queueTime +
'\nSlack token: ' + context.config.slackToken + '\n');

//create server
var server = http.createServer(context.app);
server.listen(context.config.port);
server.timeout = 50000000;

console.log('\n*------ SERVER STARTED ------*');

//creat socket connection
var io = require('socket.io')(server);

io.on('connection', function (socket) {
	context.sockets.push(socket);
});

//initialize
context.app.use(bodyParser.json());
context.app.use(bodyParser.urlencoded({ extended: true }));

//load modules
var modules = fs.readdirSync('modules');
modules.forEach(function (fileName) {
	if(path.extname(fileName) === '.js')
	{
		var module = path.basename(fileName, '.js');
		context[module] = require('./modules/' + module);
		context[module](context, io);
		console.log('Module: ' + module);
	}
});