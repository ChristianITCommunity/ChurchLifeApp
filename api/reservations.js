module.exports = function(sequelize) {

    var express = require('express');
    var Reservation = require('../models/reservation')(sequelize);
    var router = express.Router();

    router.route('/')
        .get(function (req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Get all reservations');
        })

        .post(function (req, res, next) {
            var now = Date.now();
            Reservation.create({
                title: 'Test reservation',
                description: 'test description',
                startTime: now,
                endTime: now
            }).then(function(reservation) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Add new reservation with id: ' + reservation.id);
            });
        });

    router.route('/:id')
        .get(function (req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Get reservation by ID = ' + req.params.id);
        })

        .put(function (req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Update reservation with ID = ' + req.params.id);
        })

        .delete(function (req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});

            res.end('Delete reservation with ID = ' + req.params.id);
        });

    return router;
}