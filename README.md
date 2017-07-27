### 1. Start the environment:
```shell
./build.sh wish-brand-api

docker run -p "8888:8090" --name wish-brand-api -d docker.123-dev.co.uk/wish/wish-brand-api:latest
```

### 2. Brand API Endpoints
[http://brand-api.heg-development.com:8888/api/v1.0/products/hosting/windows](http://brand-api.heg-development.com:8888/api/v1.0/products/hosting/windows)

[http://brand-api.heg-development.com:8888/api/v1.0/products/hosting/windows/1](http://brand-api.heg-development.com:8888/api/v1.0/products/hosting/windows/1)

### 3. Mock data definition
Just edit mock_data/hosting-packages.js
