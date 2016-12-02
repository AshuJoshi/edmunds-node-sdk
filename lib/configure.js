'use strict';

var debug = require('debug')('edm-key');

var EdmundsAPIKey;

var setAPIKey = function(apikey) {
    EdmundsAPIKey = apikey;
    debug("Key set to: " + EdmundsAPIKey);
};

var getAPIKey = function() {
    return EdmundsAPIKey;
};  

module.exports = {
    setAPIKey: setAPIKey,
    APIKey: getAPIKey
};