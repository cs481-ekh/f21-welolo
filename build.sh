#!/bin/bash
if [ -d "./Welolo/node_modules" ]
then
    rm -rf ./Welolo/node_modules
    cd Welolo
    npm install mysql express 

    echo "Starting Servers"
    ./start_node_server.sh &
    ./start_react_server.sh &
    sleep 10000000
    exit 0
else 
    cd Welolo
    npm install mysql express
    exit 0
fi
exit 127
