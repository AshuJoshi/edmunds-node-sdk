# Edmunds Developer API Node.js SDK

A simple Node.js SDK to access the [Edmunds Developer API](http://developer.edmunds.com/).

## Prerequisite

Before you can use this SDK you'll need to [register](http://edmunds.mashery.com/member/register/) for a key at the Edmunds Developer site. 

## Installing & Using

Clone the repository
Include the Module:

    // require the module
    var edmSDK = require('./edmunds-node-sdk/index');

NOTE: You may have to alter the path depending on where you test app is, and where you have cloned the repository

## Current Support

This version only supports the following APIs:

* [Vehicle API Spec: Make](http://developer.edmunds.com/api-documentation/vehicle/spec_make/v2/)
* [Vehicle API Spec: Model](http://developer.edmunds.com/api-documentation/vehicle/spec_model/v2/)

## Sample Code to use API:

    'use strict';
    var edmSDK = require('../edmunds-node-sdk/index');
    // Your KEY HERE
    edmSDK.setKey(<YOUR KEY HERE>);


    // Parameter	Description	            Possible Values	    
    // state        state of the car 	    new, used, future	
    // year	        The year of the car 	    1990-current year	 	          
    // view	        response details	    basic, full	       
    var opt = {
        view: 'basic',      
        year: "1996"       
        // state: "used"    
    };

    var genericCB = function(response) {
        console.log(response);
    };

    // All calls can be made without the 'opt' parameter
    
    // Spec: Make Calls
    var getMake = new edmSDK.makeInfo();
    getMake.getTotalMakeCounts(genericCB, opt);
    getMake.getSpecificMakeInfo(genericCB, "lexus", opt);
    getMake.getListCarMakes(genericCB, opt);
    
    // Spec: Model Calls
    var getModel = new edmSDK.modelInfo();
    getModel.getModelStyleDetails(genericCB, "lexus", "LS 400", opt);
    getModel.getListCarModels(genericCB, "lexus", opt);
    getModel.getModelCountByMake(genericCB, "lexus", opt);

## Testing

This release does NOT have automated testing.
All testing was validating with a simple app as shown above.

## Contributing

If you'd like to help just fork and pull.

### TODO

The following still needs to get done:

* Finish the complete Vehicle API implementation
* Include a better application that shows the API being used
