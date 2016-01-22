var fetchConfig = require('zero-config')
var config = fetchConfig(__dirname, {
    dcValue: 'us-east-1'
})

var { forEach, curry } = require('ramda')

var services = require('./services')

const start = service => {
  var s = require(service.name)
  var adapter = require(service.adapter)
  var ee = adapter(config.get(service.config))
  s(ee)
}

// start services
forEach(start, services)

// setup web server
var http = require('http')
var server = http.createServer((req, res) => res.end('palmetto flow services container...'))
server.listen(process.env.PORT || 3000)
