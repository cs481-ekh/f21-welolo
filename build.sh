#!/bin/bash
if [ -d "./Welolo/node_modules" ]
then
    rm -rf ./Welolo/node_modules
    cd Welolo
    npm install mysql express 
    npm install concurrently -g concurrently

    echo "Starting Servers"
    concurrently "./start_node_server.sh" "./start_react_server.sh"

    exit 0
else 
    cd Welolo
    npm install mysql express
    exit 0
fi
exit 127
