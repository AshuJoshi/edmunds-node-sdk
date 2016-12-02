'use strict';

var configure = require('./configure');

module.exports = {
    setKey: configure.setAPIKey,
    makeInfo: require('./vehicleAPI/getMakeInfo'),
    modelInfo: require('./vehicleAPI/getModelInfo')
};