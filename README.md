# chat
A small chat implementation in react

# boilerplate
This application is built using create-react-app

# basic usage
npm start => serve the application
npm test => run unit test  

# development notes and future improvements

## performances
Loading all messages at once is not a good idea, I could use the 'List 10 messages before a timestamp' api combined with an infinite scroll to load the next 10 messages older then the oldest displayed.

## functionality
Loading message with a GET api call is not the best solution for a chat system as the user would need to reload the page in order to see new incoming messages.
The best solution would be to implement a web-socket in order to get messages from the backend in push.

## style
The style of the application could be improved a bit, in particular by auto-scrolling the chat to the last message and by adding a scroll-bar custom style for desktop view

## testing
test cases are covering most of the code base but could be extended to have a better coverage, in particular of edge case 

