var Sequelize = require('sequelize');
var logger = require('../libs/log')(module);

module.exports = function(sequelize) {

    var schema = {
        id: {
            type: Sequelize.BIGINT,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            field: 'title',
            unique: false,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            field: 'description',
            allowNull: false
        },
        startTime: {
            type: Sequelize.DATE,
            field: 'start_time',
            allowNull: false
        },
        endTime: {
            type: Sequelize.DATE,
            field: 'end_time',
            allowNull: false
        }
    };

    var Reservation = sequelize.define('Reservation', schema, {
        freezeTableName: true,
        timestamps: true,
        tableName: 'reservation',
        underscored: true
    });

    Reservation.sync({force: false}).then(function () {

        logger.info('Reservation model is created!');
    });

    return Reservation;
}