'use strict';

var rp = require('request-promise');
var debug = require('debug')('edm-mdl');

var apikey = require('../configure');
var APIKey;

// SPEC: MODEL
// This file implements the calls for Spec:Model in the Edmunds API
// http://developer.edmunds.com/api-documentation/vehicle/spec_model/v2/

const BASE_URL_V2 = "http://api.edmunds.com/api/vehicle/v2/";

var modelInfo = function() {
    debug("ModelInfo Init");
    APIKey = apikey.APIKey();
    debug("The Key has been set to: " + APIKey);
};

// GET MODEL YEAR AND STYLE DETAILS FOR A CAR MAKE AND MODEL
// http://api.edmunds.com/api/vehicle/v2/{make}/{model}?fmt=json&api_key={api key}
// http://developer.edmunds.com/api-documentation/vehicle/spec_model/v2/02_model_details/api-description.html
modelInfo.prototype.getModelStyleDetails = function(cb, make, model, opt) {
    debug("ModelInfo Get Model Year & Style Details");
    debug("The Key has been set to: " + APIKey);

    var options = {  
        method: 'GET',
        uri: BASE_URL_V2 + make + '/' + model,
        qs: {
            fmt: 'json',
            api_key: APIKey
        }
    };
    if (opt !== undefined)
        {
            if ('year' in opt) options.qs.year = opt.year;
            if ('view' in opt) options.qs.view = opt.view;
            if ('state' in opt) options.qs.state = opt.state;
        }
    debug(options);

    rp(options)  
        .then(function (response) {
            // Handle the response
            // debug(response);
            cb(response);

        })
        .catch(function (err) {
            // Deal with the error
    });
};

// GET LIST OF CAR MODELS FOR A CAR MAKE
// https://api.edmunds.com/api/vehicle/v2/{make}/models?fmt=json&api_key={api key}
// http://developer.edmunds.com/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html
modelInfo.prototype.getListCarModels = function(cb, make, opt) {
    debug("ModelInfo List of Car Models for a Make");
    debug("The Key has been set to: " + APIKey);

    var options = {  
        method: 'GET',
        uri: BASE_URL_V2 + make + '/'+ 'models',
        qs: {
            fmt: 'json',
            api_key: APIKey,
        }
    };
    if (opt !== undefined)
        {
            if ('year' in opt) options.qs.year = opt.year;
            if ('view' in opt) options.qs.view = opt.view;
            if ('state' in opt) options.qs.state = opt.state;
        }
    debug(options);

    rp(options)  
        .then(function (response) {
            // Handle the response
            // debug(response);
            cb(response);
        })
        .catch(function (err) {
            // Deal with the error
    });
};

// GET TOTAL COUNT OF CAR MODELS FOR SPECIFIC CAR MAKE
// https://api.edmunds.com/api/vehicle/v2/{make}/models/count?fmt=json&api_key={api key}
// http://developer.edmunds.com/api-documentation/vehicle/spec_model/v2/03_models_count/api-description.html
modelInfo.prototype.getModelCountByMake = function(cb, make, opt) {
    debug("ModelInfo Get total count by specific car make");
    debug("The Key has been set to: " + APIKey);

    var options = {  
        method: 'GET',
        uri: BASE_URL_V2 + make + '/' + "models" + '/' + "count",
        qs: {
            fmt: 'json',
            api_key: APIKey,
        }
    };
    if (opt !== undefined)
        {
            if ('year' in opt) options.qs.year = opt.year;
            if ('view' in opt) options.qs.view = opt.view;
            if ('state' in opt) options.qs.state = opt.state;
        }
    debug(options);

    rp(options)  
        .then(function (response) {
            // Handle the response
            // debug(response);
            cb(response);
        })
        .catch(function (err) {
            // Deal with the error
    });
};


module.exports = modelInfo;

