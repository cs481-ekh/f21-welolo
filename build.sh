#!/bin/bash
if [ -d "./Welolo/node_modules" ]
then
    rm -rf ./Welolo/node_modules
    cd Welolo
    npm install mysql express 
    cd ./Welolo/
    npm start &
    cd ./Welolo/client &
    exit 0
else 
    cd Welolo
    npm install mysql express
    exit 0
fi
exit 127
