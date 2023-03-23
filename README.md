# Mastering State in React

## Getting started

### To run project use `npm start` command

### To run server use `npm run start` command

## Task

Please take the following steps:

1. Create a repository. Initialize a project using create-react-app.
2. Use only the capabilities of React to meet all the criteria related to app state management. Redux library is prohibited.
3. Implement an app for displaying the section "Big Community of People Like You" and "Join Our Program" according to the design from Figma.
4. When the page has loaded, implement the functionality of displaying information in the section "Big Community of People Like You" based on the design in Figma. To implement it, make a GET Ajax request using the /community endpoint.
5. The subscribe form in the "Join Our Program" section should be connected to the server.
6. Implement the functionality of sending a user's email to the server when they click on the "Subscribe" button. To do this, make a POST Ajax request using the /subscribe endpoint.
7. When email is forbidden@gmail.com, the server should respond with the 422 status code and a payload containing information about the error - { "error": "Email is already in use" }. Use browser developer tools to examine the response to this scenario. Display the error message in the browser using window.alert().
8. Implement the functionality of unsubscribing the user's email from the community list when they click on the "Unsubscribe" button. To do this, make a POST Ajax request using the /unsubscribe endpoint.
9. Prevent additional requests if the "Subscribe" and "Unsubscribe" buttons are pressed while requests to the /subscribe and /unsubscribe endpoints are in progress. Also, disable them (using the disabled attribute) and style them using opacity: 0.5.
10. Add a button to toggle the visibility of the section content (the area inside the blue rectangle in the picture below). For the open state, the button text should be "Hide section". For the hidden state, it should be "Show section".

## How this task will be evaluated

Your solution should meet the following criteria:

1. The functionality of subscribing a user (using the /subscribe endpoint) is implemented (5 points).
2. The functionality of displaying an error message using window.alert() when the email is forbidden@gmail.com is implemented (5 points).
3. The functionality of unsubscribing a user (using the /unsubscribe endpoint) is implemented (5 points).
4. The functionality of displaying information in the section "Big Community of People Like You" is implemented (using the /community endpoint) according to the design (5 points).
5. The functionality of preventing additional requests upon clicking on the "Subscribe" and "Unsubscribe" buttons is implemented (while requests to the /subscribe and /unsubscribe endpoints are in progress). The buttons "Subscribe" and "Unsubscribe" are disabled (using the disabled attribute) and styled using opacity: 0.5 (5 points).
6. The section content visibility can be toggled (5 points).

You can earn a maximum of 30 points for this task. To complete the task successfully, you need to earn at least 70% of the points.

When your solution is ready, commit the changes to the repository, publish the task to GitLab, and share the link to the repository with your mentor.
