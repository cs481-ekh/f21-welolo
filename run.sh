echo "Starting Servers"
echo "Starting Node Server"
cd ./Welolo/
npm start &
run: echo "Starting React Server"
cd ./client/
npm start &