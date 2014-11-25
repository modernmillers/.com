var config = {

  integrations : {
    twitter   : "ModernMillers",
    disqus    : "modernmillers",
    analytics : "UA-57080940-1",
    filament  : true,
    addThis   : false
  },

  env : {
    dev : {
      blog : {
        uri         : "http://127.0.0.1:8000",
        title       : "Thoroughly Modern Millers Development",
        description : "Making a creative home for the modern world"
      },

      owner : {
        uri  : "http://127.0.0.1:8000",
        name : "The Millers"
      }
    },

    prod : {
      blog : {
        uri         : "http://modernmillers.com",
        title       : "Thoroughly Modern Millers",
        description : "Making a creative home for the modern world"
      },

      owner : {
        uri  : "http://modernmillers.com",
        name : "The Millers"
      }
    }
  }
};


module.exports = function (args) {
  'use strict';

  var definition = config.env.dev;

  //Look through arguments for --prod or -p
  args.forEach(function (val) {
    if (val === '-p' || val === '--prod') {
      definition = config.env.prod;
    }
  });

  //Include Moment Support
  definition.moment = require('moment');
  //No need to Override
  definition.integrations = config.integrations;
  return definition;
};