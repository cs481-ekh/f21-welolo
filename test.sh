#!/bin/bash
FILE=./Welolo/client/src/App.test.js
if test -f "$FILE"; then
    npx cypress run
else
    echo "Error: no test specified" 
    exit 127
fi
