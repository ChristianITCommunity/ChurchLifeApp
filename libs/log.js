var winston = require('winston');
var config = require('../config');

module.exports = function getLogger(module) {

    var path = module.filename.split('/').slice(-2).join('/');

    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                level: config.get('logger:level'),
                label: path
            })
        ]
    });
}