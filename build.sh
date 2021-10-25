#!/bin/bash
if [ -d "./Welolo/node_modules" ]
then
    rm -rf ./Welolo/node_modules
    cd Welolo
    npm install mysql express 

    echo "Starting Servers"
    npm start &
    cd client
    npm start &

    echo "Starting Tests"
    cd ..
    cd ..
    ./test.sh
    exit 0
else 
    cd Welolo
    npm install mysql express
    exit 0
fi
exit 127
