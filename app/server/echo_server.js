var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var createEchoServer = function(dir) {
    var root = dir;

    var server = http.createServer(function(req, res) {
        var url = parse(req.url);
        var path;
        if (url.pathname == '/') {
            path = join(root, 'index.html');
        } else {
            path = join(root, url.pathname);
        }
        fs.stat(path, function(err, stat) {
            if (err) {
                if ('ENOENT' == err.code) {
                    res.statusCode = 404;
                    res.end('Not Found');
                } else {
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                }
            } else {
                res.setHeader('Content-Length', stat.size);
                var stream = fs.createReadStream(path);
                stream.pipe(res);
                stream.on('error', function(err) {
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                });
            }
        });
    });

    return server;
}

exports.createEchoServer = createEchoServer;
