#!/bin/bash
FILE=./Welolo/client/src/App.test.js
if test -f "$FILE"; then
    echo "Yes it exists"
    exit 0
else
    echo "Error: no test specified" 
    exit 127
fi
