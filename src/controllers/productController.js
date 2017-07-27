var mockData = require('../../mock-data/hosting-packages')();
var logger = require('../config/logger');
var _ = require('lodash');

var productController = function() {
  var getHostingPackages = function(req, res) {
    var hostingPackages = mockData.mock_data;
    res.status(200);
    res.send(hostingPackages);
  };

  var getHostingPackage = function(req, res) {
    req.checkParams('hosting_package_id', 'Field \'hosting_package_id\' is required').notEmpty();
    var err = req.validationErrors();
    if (err) {
      res.status(400);
      res.send('Validation errors: ' + util.inspect(err));
      return;
    }
    logger.log('info', 'Searching for hosting_package with hosting_package_id: %s', req.params.hosting_package_id);

    var hosting_packages = mockData.mock_data;
    var hostingPackage = _.filter(hosting_packages, function(item) {
      return item.hosting_package_id == req.params.hosting_package_id;
    });

    if (hostingPackage && !_.isEmpty(hostingPackage)) {
        res.status(200);
        res.send(hostingPackage);
    }
    else{
      res.status(404);
      res.send('Cannot find hosting_package with hosting_package_id: ' + req.params.hosting_package_id);
    }
  };

  // revealing model pattern
      return {
          getHostingPackage: getHostingPackage,
          getHostingPackages: getHostingPackages
      };
};

module.exports = productController;
