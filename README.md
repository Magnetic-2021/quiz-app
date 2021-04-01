# Knowledge Bomb - Quiz App

![Knowledge Bomb Logo](/frontend/src/Components/Logo/dark.svg)

**Knowledge Bomb** is an exciting quiz app in which users have to answer 10 questions in the time allowed or risk the bomb exploding. Can you beat the bomb?

To use the app, the user must create an account and sign in. When the game is played, the app serves the user 10 questions, from either easy, medium or hard difficulties, along with a timer. The questions are either multiple choice or true or false.

The more answers you get right, the more time you have. But run out of time and it is game over!

Once the game is over, the user's score is presented to them on a 'game over' screen and the score is stored in the app. The user can then choose to play again or view their score on a leaderboard, on which they can view all users' results or their own user score history.

Knowledge Bomb was created and built by Steve, Gemcila, Jennifer and Phil as our final project for Code Nation's 12-week immersive coding bootcamp. [Click here](https://wearecodenation.com/event/master-coding/) for more information.

## How we built the app

We used the MERN stack, a combination of MongoDB, Express JS, React JS and Node JS, to build the app. We also used Axios to connect the server and client together through Express JS.

For some of the styling, we also used some elements of the [Ant Design](https://ant.design/components/overview/) component library to ensure consistent styling on the key elements, such as forms, buttons and icons.

## How to view the app

- To view the app, click [here](https://magnetic-2021.herokuapp.com/)
- Create an account with a username, email address, password and even your own Avatar (optional).

## Cloning the app

- To clone our app, go to our repo [here](https://github.com/Magnetic-2021/quiz-app)
- Select an option to clone the repository into your local directory

## How to run the app

- npm run dev (this concurrently runs the frontend and backend)
- npm run backend (runs the backend only)
- npm run frontend (runs the frontend only)

## Connection String

- For security reasons we used our own Mongo Atlas string which is stored in a .env file.
- You will need to set your own connection string up in order to store and retrieve your own data, but your environmental variable must be called, '**mongoConnectionString**'.
