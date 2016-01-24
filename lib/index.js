'use strict';

var fetchConfig = require('zero-config');
var config = fetchConfig(__dirname, {
  dcValue: 'us-east-1'
});

var _require = require('ramda');

var forEach = _require.forEach;
var curry = _require.curry;

var services = require('./services');

var start = function start(service) {
  var s = require(service.name);
  var adapter = require(service.adapter);
  var ee = adapter(config.get(service.config));
  s(ee);
};

// start services
forEach(start, services);

// setup web server
var http = require('http');
var server = http.createServer(function (req, res) {
  return res.end('palmetto flow services container...');
});
server.listen(process.env.PORT || 3000);