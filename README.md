# About The App

Deployed App link - https://marketplace-manita.netlify.app

Link to backend repository (API) - https://github.com/northcoders/fe-nc-marketplace-api

Heroku Link - https://nc-marketplace-api-manita.herokuapp.com/

It makes requests to the back end hosted on Heroku to get data and manipulate it based on the request made.

Its an online marketplace where we can find new homes for all of the unused items we have lying around, rather than letting them go to waste or just throwing them out. Users will be able to list items they no longer want and other users can order them from each other. We have a lot of <s>old rubbish</s> retro antiques to get rid of so the items are all sorted into categories to make searching though them easier.

- user can view list of available items.
- user can view a list of items for a particular category.
- user can list an item to sell.
- user can delete an item listing if I change my mind.
- user can order an item.
- user can view which items I have previously ordered.
- user can give another user kudos to make them feel good about themselves.
- user can add an item to my basket to order later if I am still browsing.
- user can view which items I have added to my basket.
- user can remove items from my basket.
- user can create a new user profile.

## Endpoints

'/' -> Shows a list of all users and can also select specific users.

'/signup' -> sign up a new user.

'/categories' -> shows a list of all categories. user can see the list items based on category

'/basket' -> Shows items in the basket.

'/placeorder' -> shows the list of items in the order and total amount.

'/previousorders' -> Shows the list of items user has order previously.

## Installation

Run the following command to install all the dependencies -

```bash
npm install
```

## To run the app locally

```bash

git clone https://github.com/manitagupta15/MarketPlace-FrontEnd.git

cd marketplace-app

npm start
```

## Versions

```bash
    - developed on VS Code Version: 1.68.1
    - PostgreSQL Version: 2.5.8
    - Node Version: 18.1.0
```
