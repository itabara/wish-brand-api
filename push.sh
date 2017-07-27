#!/bin/bash
project_name=$1

if [ $# -ne 1 ]; then
    echo $0: usage: push.sh project_name
    exit 1
fi
docker push docker.123-dev.co.uk/wish/$project_name:latest
