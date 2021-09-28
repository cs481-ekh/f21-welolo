#!/bin/bash
FILE=./Welolo/client/src/App.test.js
if test -f "$FILE"; then
    echo "Yes it exists"
    exit 127
else
    echo "Error: no test specified" 
    exit 0
fi