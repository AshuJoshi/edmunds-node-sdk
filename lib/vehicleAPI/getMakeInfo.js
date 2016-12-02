'use strict';

var rp = require('request-promise');
var debug = require('debug')('edm-make');

var apikey = require('../configure');
var APIKey;

// SPEC:MAKE
// This file implements the calls for Spec:Make in the Edmunds API

const BASE_URL_V2 = "http://api.edmunds.com/api/vehicle/v2/";
const BASE_COUNT_URL_V2 = BASE_URL_V2 + "makes/count";

var makeInfo = function() {
    debug("MakeInfo Init");
    APIKey = apikey.APIKey();
    debug("The Key has been set to: " + APIKey);
};

// GET TOTAL COUNT OF CAR MAKES/BRANDS
// http://api.edmunds.com/api/vehicle/v2/makes/count?fmt=json&api_key={api key}
// http://developer.edmunds.com/api-documentation/vehicle/spec_make/v2/03_makes_count/api-description.html
makeInfo.prototype.getTotalMakeCounts = function(cb, opt) {
    debug("MakeInfo Total Count of Makes");
    debug("The Key has been set to: " + APIKey);

    var options = {  
        method: 'GET',
        uri: BASE_COUNT_URL_V2,
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

// GET DETAILS FOR A SPECIFIC CAR MAKE/BRAND
// http://api.edmunds.com/api/vehicle/v2/{make}?fmt=json&api_key={api key}
// http://developer.edmunds.com/api-documentation/vehicle/spec_make/v2/02_make_details/api-description.html
makeInfo.prototype.getSpecificMakeInfo = function(cb, make, opt) {
    debug("MakeInfo Specific Car Make");
    debug("The Key has been set to: " + APIKey);

    var options = {  
        method: 'GET',
        uri: BASE_URL_V2 + make,
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

// GET LIST OF CAR MAKES
// http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={api key}
// http://developer.edmunds.com/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html
makeInfo.prototype.getListCarMakes = function(cb, opt) {
    debug("MakeInfo List of Car Makes");
    debug("The Key has been set to: " + APIKey);

    var options = {  
        method: 'GET',
        uri: BASE_URL_V2 + "makes",
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


module.exports = makeInfo;

