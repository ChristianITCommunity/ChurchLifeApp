var echoServer = require("./server/echo_server");

var root = __dirname;

var server = echoServer.createEchoServer(root);
server.listen(3000);