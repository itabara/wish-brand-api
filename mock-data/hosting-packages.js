var hosting_definition = function() {
  var mock_data = [
    {
      "hosting_package_id": 1,
      "hosting_package_name": "Basic Windows Shared Hosting",
      "description": "Basic Windows Shared Hosting",
      "features": {
        "databases": 5,
        "websites": 5
      }
    },
    {
      "hosting_package_id": 2,
      "hosting_package_name": "SMB Windows Shared Hosting",
      "description": "SMB Windows Shared Hosting",
      "features": {
        "databases": 10,
        "websites": 10
      }
    }
  ];
  return {mock_data: mock_data};
};

module.exports = hosting_definition;
