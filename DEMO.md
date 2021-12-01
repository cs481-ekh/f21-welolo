# Demonstration Instructions
You may also test the application with limited functionality at https://welolo1.herokuapp.com

## IMPORTANT NOTE
Please ensure you have npm 6.14.15 and node v14.17.6 installed on your machine. Refer to the following document if you are unsure how to do this: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

NOTE: Earlier or later versions of npm/node may be sufficient, though we had only tested the application with the versions mentioned above

## Building the Project
1. Make sure you have cloned the repository on your local machine
2. Navigate to the root directory of the project in a terminal window (the same directory as this file)
3. Run the following command in this directory:
```
 $ ./build.sh
```

## Setting up your Environment
There are two different versions of our sandboxed environment. 

The first of the two versions uses test credentials for both SMS and Payments, so inputting valid information will simulate an actual transaction and SMS message, though a message will not actually be sent. 

The second of the two versions uses sub-production credentials for SMS and test credentials for Payments. Since we are using a free trial version of Twilio, the only phone number that we are allowed to send an SMS message to is Xavier's phone since Twilio only allows one eligible recipient number for every trial account. If you would like to send an SMS message to yourself, you will need to create a Twilio trial account and replace the Twilio credentials in the .env file with your own. 

Payments are still using test credentials and will not send an actual payment through.

In order for the application to run properly, you need to have a file to store your credentials for Twilio, Gravity, and MySQL. For the most up-to-date versions of both our .env files, please see the artifacts channel in the Welolo discord server.

Once you have the environment variables you need, create the .env file in the 'Welolo/' folder and paste all variables into it.

## Running the Project
1. From the root project directory, navigate to the folder 'Welolo/client/'
2. From your terminal run the following command:
```
 $ npm start
```
3. Repeat steps 1-2, but rather than navigating to the client folder, navigate to 'Welolo/server'

## Testing the Application
1. After starting the project, navigate to 'http://localhost:3000' from any browser window.
2. From here, you may browse through any available merchants and their respective menus.
3. Once you're looking at a merchants menu, you may choose to purchase an individual item or you can scroll to the bottom and skip this step to choose a custom quantity
4. On the next page you will be asked for recipient information, including the recipients full name, the recipients phone number, the quantity you are sending to the recipient, and the message you would like to send to them.

NOTE: It is very important that you use the correct phone nunmber and card information when testing the application. If you are using the test enivronment credentials, you must use the following fields
```
Recipient Number: +15005550000
Card Number: 4242 4242 4242 4242 
Exp Date: 09/35
CVV: 123
```
If you are using the sub-production credentials, you must use the following fields
```
Recipient Number: +17025763855
Card Number: 4242 4242 4242 4242 
Exp Date: 09/35
CVV: 123
```
Using the credentials above with our sub-production environment variables, whatever message you input will be sent to Xavier's phone. Let him know when you are testing it and he will verify the messages you are sending.

