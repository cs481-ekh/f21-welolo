#!/bin/bash
FILE=./Welolo/client/src/App.test.js
if test -f "$FILE"; then
    cd ./Welolo/
    echo "Starting Servers"
    cd ..
    npm start &
    cd client
    npm start &
    echo "Running Cypress Tests"
    npx cypress run
else
    echo "Error: no test specified" 
    exit 127
fi
