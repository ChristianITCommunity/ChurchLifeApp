var express = require('express');
var router = express.Router();

router.route('/')
    .all(function(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })

    .get(function(req, res, next) {
        res.end('Get all reservations');
    })

    .post(function(req, res, next) {
        res.end('Add new reservation');
    });

router.route('/:id')
    .all(function(req, res, next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })

    .get(function(req, res, next){
        res.end('Get reservation by ID = ' + req.params.id);
    })

    .put(function(req, res, next){
        res.end('Update reservation with ID = ' + req.params.id);
    })

    .delete(function(req, res, next){
        res.end('Delete reservation with ID = ' + req.params.id);
    });

module.exports = router;