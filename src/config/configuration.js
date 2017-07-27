var convict   = require('convict');
var path      = require('path');
var validator = require('validator');


// Define configuration schema
var conf = convict({
    env: {
        doc    : "The applicaton environment.",
        format : ["production", "development", "staging", "test"],
        default: "development",
        env    : "NODE_ENV"
    },
    express: {
        ip: {
            doc    : "The IP address to bind.",
            format : "ipaddress",
            default: "0.0.0.0",
            env    : "IP_ADDRESS"
        },
        port: {
            doc    : "The port to bind.",
            format : "port",
            default: 3000,
            env    : "EXPRESS_PORT"
        }
    }
});

// Load environment dependent configuration
var env = conf.get('env');
conf.loadFile(path.join(__dirname, './env/' + env + '.json'));

if (process.env.EXPRESS_PORT){
    conf.set("express.port", process.env.EXPRESS_PORT);
}

// Perform validation
conf.validate({
    strict: true
});

module.exports = conf;
