#!/bin/bash
if [ -d "./Welolo/node_modules" ]
then
    rm -rf ./Welolo/node_modules
    cd Welolo
    npm install mysql express 

    echo "Starting Node Server"
    npm start & npx wait-on http://localhost:3001

    echo "Starting React Server"
    cd ./Welolo/client/
    npm start & npx wait-on http://localhost:3000
    
    exit 0
else 
    cd Welolo
    npm install mysql express
    exit 0
fi
exit 127
