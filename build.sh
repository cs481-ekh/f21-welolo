#!/bin/bash
if [ -d "./Welolo/node_modules" ] || [ -d "./Welolo/client/node_modules" ];
then
    rm -rf ./Welolo/node_modules
    rm -rf ./Welolo/client/node_modules
    cd Welolo
    npm install
    npm install dotenv --save
    npm install mysql
    npm install express
    npm install twilio
    npm install cors
    npm install emergepay-sdk
    npm install cypress --save -dev
    cd client
    npm install express
    npm install emergepay-sdk
    npm install --save react-script-tag
    exit 0
else 
    cd Welolo
    npm install
    npm install dotenv --save
    npm install mysql
    npm install express
    npm install twilio
    npm install emergepay-sdk
    npm install cors
    npm install cypress --save -dev
    cd client
    npm install express
    npm install emergepay-sdk
    npm install --save react-script-tag
    exit 0
fi
exit 127
