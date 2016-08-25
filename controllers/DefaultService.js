'use strict';

var os = require('os');

exports.helloGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "success" : true,
  "host" : os.hostname(),
  "message" : 'Well, Hello ' + args.user.value
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.helloUserGET = function(args, res, next) {
  
  this.helloGET(args, res, next);
}

