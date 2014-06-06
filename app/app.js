var restify = require('restify'),
    config = require('config');

var server = restify.createServer(
    config.app
);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

require('./routes')(server);

server.listen(config.server.port, function () {
    console.log('%s listening at %s', server.name, server.url);
});