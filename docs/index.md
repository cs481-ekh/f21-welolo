# Welolo - Pay It Forward


## Team Members
- Alyssa West
- Xavier Frehner
- Zahra Rahmani


## Abstract
Welolo is a platform for local businesses that allows their customers to pay it forward. It allows for gifting products and services to friends, family, and strangers to draw new customers and increase business. In its current state, a user is able to pay with a credit or debit card using Square to pay it forward. However, in the interest of ease of use for the user, Welolo is looking to expand their payment options and implement a system to notify those who have been gifted money.

Welolo currently has no way to notify the recipients of the items paid forward to them and have no other options for payment that may be more convenient to the user. For this project, we will create a checkout process in a sandboxed environment that can send details of the items, including the location, as a notification to the recipients, so the Welolo app helps the recipients to understand what items have been prepaid for them to get them from the store. We will also provide another payment option to help make things more convenient for users who would like to pay it forward to another individual or group.

## Project Description 

### Screenshots

![title](data:image/png;base64,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)


### What Was Actually Built

### How it Works
