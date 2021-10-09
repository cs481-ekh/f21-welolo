#!/bin/bash
if [ -d "./Welolo/node_modules" ]
then
    rm -rf ./Welolo/node_modules
    cd Welolo
<<<<<<< Updated upstream
    npm install mysql express 
    exit 0
else 
    cd Welolo
    npm install mysql express
=======
    npm install
    npm install mysql express twilio
    npm install cypress --save -dev
    cd client
    npm install express
    cd ..
    source ./.env
    exit 0
else 
    cd Welolo
    npm install mysql twilio express
    cd client
    npm install express
>>>>>>> Stashed changes
    exit 0
fi
exit 127
