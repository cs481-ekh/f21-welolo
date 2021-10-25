# Welolo - PayPal and Twillio Functionality
![example workflow](https://github.com/cs481-ekh/f21-welolo/actions/workflows/welolo-github-actions.yml/badge.svg)

## Running the Node Server
All of the project files were put inside the Welolo folder in the repository to keep things separate. The Node.js components are inside the server folder.

- Enter into the Welolo directory and into the server directory
- Install express using the following NPM command if you haven't already.
    ```
    npm i express 

    or 

    npm install express
    ```
- Run the following command to start the server:
    ```
    npm start
    ```

## Running the React Server
The React.js components of the project are inside the client folder.

- Enter into the Welolo directory, then into the client directory
- Install `create-react-app` using the following command if you haven't already:
    ```
    npm i create-react-app

    or

    npm install create-react-app
    ```
- run the following command to start the server:
    ```
    npm start
    ```

## Verification Steps for installing cypress and run tests:

    1. Run npm start both from server and client folders
    2. Run "npm install cypress --save -dev" from Welolo folder (this step is already done)
    3. Run "npm run cypress:open" or "npx cypress open" from Welolo folder


##  Resources Used
- https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
- https://www.twilio.com/blog/send-an-sms-react-twilio