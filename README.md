# Overlook Hotel

## Overview

Overlook Hotel was a final solo project which used Javascript as primary front-end language (along with html and css) as well as API requests (GET and POST). It allowed deeper understanding in fetching and posting requests and their interaction with front-end programming languages.

<img width="1022" alt="Screen Shot 2022-04-26 at 9 20 20 PM" src="https://user-images.githubusercontent.com/87003746/165433250-a9b13965-7d43-4d35-9206-c0af87b06cd9.png">

## Accessibility

Proud to present LightHouse score of 100% and to have gained a new perspective after learning about WAI ARIA recently.

<img width="1238" alt="Screen Shot 2022-04-26 at 8 41 45 PM" src="https://user-images.githubusercontent.com/87003746/165432636-2ce8ccc3-e0e2-4e11-8bf8-23be21202da9.png">

## Local Set-Up Instructions

### Front-end

- From the repo click the code button and copy the SSH link.
- Open terminal by pressing command + space bar, and search for terminal
- Inside of you terminal type `git clone` and then paste the SSH link.
- In your terminal type `cd` and name of the folder where you cloned
- Run NPM install from your command line: `npm install`
- Do NOT run `npm audit fix --force`
- Then type `npm start`
- This will run the Webpack in the terminal so you can view and use the application in your browser
- The browser should then deploy using a local host
- Find the line that says Project is running at: http://localhost:8080/ Copy and paste that URL into your browser into your browser. Now the application set up and ready to use!

- NOTE: Make sure that you type `Control + C` in your terminal when you are done using the application. This ensure the server will stop running before your close your Terminal.

### Back-end

- For back-end, refer to this repo: [https://github.com/userigorgithub/overlook-api]

## Instructions for Use

- On opening the browser, a user has to login into application:
Default login for customer: username: customerX, where X is a number between 1 and 50 (ex: customer1), password: overlook2021
Default login for manager: N/A

![Screenshot 2024-01-02 at 1 52 03 AM](https://gist.github.com/assets/87003746/befb8bda-e2f5-4a8f-a890-869d3707a83d)

- Upon logging in, user will see their interface with their name, amount spent, and booking options

![Screenshot 2024-01-02 at 1 52 34 AM](https://gist.github.com/assets/87003746/24a6aa3c-a012-4378-8896-8596d3698070)

- A user may book rooms by picking a date and/or room type and clicking search button to display the results

![Screenshot 2024-01-02 at 1 53 29 AM](https://gist.github.com/assets/87003746/7e6da559-5bac-48af-ada8-a6d27f6baf43)

- Clicking submit button will result in storing user's booking with their past/upcoming bookings

![Screenshot 2024-01-02 at 1 53 56 AM](https://gist.github.com/assets/87003746/f2c451a1-0b75-4af7-ad0c-6724b4c910cc)

- Finally, a user may go back, book again and/or log out from an application

## Technologies Used

- ES6 JavaScript
- CSS
- HTML
- Webpack
- Fetch API
- Mocha
- Chai
- GET and POST requests

## Future Features

- Implement manager interaction
- Implement more responsive layout (media queries)

## Project management

- I've used a [Github Project Board](https://github.com/userigorgithub/overlook/projects/1) to stay on task and meet the deadline
- The project specs and guideline for this project can be found [HERE](https://frontend.turing.edu/projects/overlook.html)

## Contributors

- [Igor Decess](https://github.com/userigorgithub)
- [Josh Mallery](https://github.com/JoshMallery) (reviewer)
