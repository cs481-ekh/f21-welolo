# Welolo - Pay It Forward


## Team Members
- Alyssa West
- Xavier Frehner
- Zahra Rahmani


## Abstract
Welolo is a platform for local businesses that allows their customers to pay it forward. It allows for gifting products and services to friends, family, and strangers to draw new customers and increase business. In its current state, a user is able to pay with a credit or debit card using Square to pay it forward. However, in the interest of ease of use for the user, Welolo is looking to expand their payment options and implement a system to notify those who have been gifted money. For this project, we created a checkout process in a sandboxed environment using Gravity and implemented Twilio to text the recipient once a product or service has been gifted to them. This was done in Node.js and React.js for easy integration into the sponsor's existing project.

## Project Description 

[Welolo Web Page Hosted on Heroku](https://welolo1.herokuapp.com/)

### Screenshots

![Welolo Merchant Page](docs/WeloloMerchantPage.png)

![Welolo Item Page](https://drive.google.com/file/d/1DjgdovAr3wmlJfKZIN7jgaI66NcSPgkU/view?usp=sharing)

![Welolo Payment Form](https://drive.google.com/file/d/1yDaUF4V4kYtlGDenLJLDBIV0Xxosz2nA/view?usp=sharing)

![Welolo Gravity Modal](https://drive.google.com/file/d/1AVmUNAAOVXH1FjB6ZrwG8PtpZsBkSCtY/view?usp=sharing)

![Welolo Gravity Successful Transaction](https://drive.google.com/file/d/1YVs_XnwXBdkBOE_jXIpGERsMFcnFcytC/view?usp=sharing)

### What Was Actually Built and How it Works

We were able to build a fully functioning React.js and Node.js website hosted on Heroku from the ground up. This website features the mock merchant page as well as mock items to go along with each merchant. We implemented a database on Heroku to store the merchants and their items so that the sponsor is able to update quickly as needed if they choose to one day use the site. The user is able to select the merchant and an item and the cost of the item will be prepopulated in the payment form. The user can also opt out of selecting the item by scrolling to the bottom of the item page and selecting skip this step. 

The payment form validates the form using React Hooks. If all of the information is what we expect it to be and the user clicks the 'Pay it Forward' button, the appropriate endpoints in the backend are called and the transaction is initiated. This pulls up the Gravity payment modal which allows us to take the user's payment and send the text message once the transaction has completed successfully. In this version, we are using test credentials for both Twilio and Gravity. This limits us slightly as Twilio will only send text messages to Xavier's phone since he is the owner of the test credentials. To change this, you would need to replace the existing test credentials with those of your own. We are also limited by the Gravity credentials as it doesn't allow us to detect when the transaction has completed successfully to complete the verification step.
