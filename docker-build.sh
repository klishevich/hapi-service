#!/bin/bash

appName=$1
appVersion=$2

if [ "$MODULE_VERSION" != "" ]
then
  appVersion=$MODULE_VERSION
fi

echo "Docker image version: $appVersion"

image="$appName:$appVersion"

tar -cf dist.tar .build

docker build -f ./Dockerfile -t $image .

rm dist.tar
