#!/bin/bash
if [ -d "./Welolo/node_modules" ]
then
    rm -rf ./Welolo/node_modules
    cd Welolo
    npm install mysql express 
    npm install cypress --save -dev
    cd client
    npm install express
    exit 0
else 
    cd Welolo
    npm install mysql express
    cd client
    npm install express
    exit 0
fi
exit 127
