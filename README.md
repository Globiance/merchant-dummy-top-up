# merchant-dummy-top-up

## Overview
A standalone FE+BE which allows user to do the following:
1. Register - Login
2. Check wallet balance
3. Top-up
4. Check previous top-up history

Figma: https://www.figma.com/file/LH4H0v94wzR3MhgNA4oWgZ/Globiance-Checkout-Auth?type=design&node-id=1616-2199&mode=design&t=Vw6eE9mLUhBsdF0t-11

## Working
* User can choose from a predefined set of top-up amount or a custom top-up amount which they can enter themselves.
* On clicking any top-up a checkout of that amount should be created & a widget should be opened.
* Any payment update should be listened for via webhooks & according history must be updated for a top-up
* on successful top-up, add the amount to the user's wallet 