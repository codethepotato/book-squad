# Rent A Programmer!

Welcome to your very own Rent A Programmer! 

A Full Stack website to order a programmer for all of your coding needs. We have a selection of programmers with different specialties to choose from. There's even a page to see every order you've submitted. 

# Installation

To start up the back-end, open a second terminal and run these commands:
`pipenv install && pipenv shell`,
`npm install --prefix client`.

To get the front-end started, first cd into the client directory and run these commands in the terminal:
`npm install`,
`npm install react-router-dom`,
`npm start`.


# Phase-4 Project Requirements
    -Use a Flask API backend with a React frontend.
    -Have at least three models on the backend, that include the following:
        -At least two one-to-many relationships.
        -At least one reciprocal many-to-many relationship.
        -Full CRUD actions for at least one resource.
        -Minimum of create and read actions for EACH resource.
    -Use forms and validation through Formik on all input.
        -At least one data type validation.
        -At least one string/number format validation.
    -Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
    -Connect the client and server using fetch().


# Models

Programmer, User, and Order

A User can make many Orders.
A Programmer can have many Orders.
An Order belongs to a User and belongs to a Programmer.

# Components

App, Home, HomeCard, NavBar, Orders, ProgrammerCard, Programmers, TopBanner

# Authors

Erica, Harjas, Sebastian