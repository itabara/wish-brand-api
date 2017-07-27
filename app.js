var express          = require('express');
var expressValidator = require('express-validator');
var bodyParser       = require('body-parser');
var cors             = require('cors');
var path             = require('path');
var errorhandler     = require('errorhandler');
var compression      = require('compression');
var helmet           = require('helmet');
var os               = require('os');
var configuration    = require('./src/config/configuration');
var logger           = require('./src/config/logger');

var app = express();

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler());
}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(expressValidator());

app.use(cors()); //allow calls from frontend

app.use(compression());
app.use(helmet());

var config_versions = require('./src/routes/config')(app);

app.get('/host', function(req, res) {
    res.send('<html><body>Hello from container ' + os.hostname() + '</body></html>');
});

// start the server
app.listen(
    configuration.get('express.port'),
    configuration.get('express.ip')
);

var url = 'http://' + configuration.get('express.ip') +
    ':' + configuration.get('express.port');

logger.log('info', 'Server uri         : %s', url);
logger.log('info', 'Container uri      : %s', url + "/host");

logger.log('info', 'API version(s):');
for (var i = 0; i < config_versions.length; i++)
    logger.log('info', '   %s/api/%s/', url, config_versions[i]);

// for supertest to test
module.exports = app;
