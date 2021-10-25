#!/bin/bash
FILE=./Welolo/client/src/App.test.js
if test -f "$FILE"; then
    cd ./Welolo/
    echo "Running Cypress Tests"
    npx cypress run
else
    echo "Error: no test specified" 
    exit 127
fi
