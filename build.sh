#!/bin/bash
project_name=$1

if [ $# -ne 1 ]; then
    echo $0: usage: build.sh project_name
    exit 1
fi

docker build --build-arg project_name=$project_name -t docker.123-dev.co.uk/wish/$project_name:latest -f ./Dockerfile .
