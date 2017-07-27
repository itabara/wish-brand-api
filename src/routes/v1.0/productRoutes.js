var express = require('express');
var productController = require('../../controllers/productController')();

var router = function(){
    var prodRouter = express.Router();

    // create the middlware
    prodRouter.route('/')
      .get(productController.getHostingPackages);

    prodRouter.route('/:hosting_package_id')
      .get(productController.getHostingPackage);

    return prodRouter;
};
// export as a function for easy inject
module.exports = router;
