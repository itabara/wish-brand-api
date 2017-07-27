var config = function (app) {
    // define the versions
    var api_versions = ['v1.0'];

    app.get('/api', function (req, res) {
        res.json(api_versions);
    });

    // versioned routes go in the routes/ directory
    // import the routes
    api_versions.forEach(function (version) {
        var api_version = '/api/' + version;
        var route_path = './' + version + '/';

        // create endpoint to handle /products
        app.use(api_version + '/products/hosting/windows/', require(route_path + 'productRoutes')());
    });

    return api_versions;
};

// export as a function for easy inject
module.exports = config;
