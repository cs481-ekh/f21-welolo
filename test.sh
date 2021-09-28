#!/bin/bash
FILE=./Welolo/client/src/App.test.js
if test -f "$FILE"; then
    echo "Yes it exists"
else
    echo "Error: no test specified" 
fi