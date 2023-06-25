# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Please clone this `repo` on your machine and follow the instructions below.

## NodeJS Web API project from the following repo is used in this repo
- [`MongoDB Nodejs Web Api`](https://github.com/prasadnarwadkar/MongoDBNodejsWebApi/)

# Overview

This is a getting started with `ReactJS` app (`MERN`) that has the following features:
 
- **Auth0 Login provider**
- **`Router`, `Switch`, and `Route`s from `react-router-dom`.**
- **`useRef` to highlight and format a certain piece of JSON returned from APIs.**
- **`useEffect` to re-run effects (e.g. fetch call to APIs based on some state change)**
- **`useState` hook to declare a state.**
- **Function components**
- **Setting the state**
- **Handling user-triggered `events` such as `button click` or `input change` for example.**
- **Forms in ReactJS**

# Authentication and authorization
This app uses `Auth0` which is a great platform that enables developers to factor their authorization and user management out of their app and let `Auth0` take care of user management. Please visit [Auth0](https://auth0.com/) to learn more.

`Auth0` allows username-and-password-based login as well as `OAuth 2.0` flows with Google etc. which makes it very easy to manage your users. You can always use any other mechanism to manage your users. 

# Auth0 Configuration
Go to [Auth0](https://auth0.com/) and login/sign up and log in to create an application. After that, you come to know your Auth0 app settings such as domain, clientId, and audience. Save `auth_config.json.example` as `auth_config.json` and put these settings in the `auth_config.json` file.
Create a few `Auth0` domain users for authentication.

# API used in this app
This app doesn't talk to the `MongoDB` db directly. Rather, it talks to an API that talks to MongoDB. The API is in the project [here](https://github.com/prasadnarwadkar/MongoDBNodejsWebApi/). 

- Please clone the `API project repo` on your machine.
- [Install MongoDB on your machine](https://www.mongodb.com/docs/manual/installation/)
- [You can also use a `docker container` for `MongoDB` if you have docker on your machine](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)
- [You can also use Atlas for storing your `MongoDB` collections and dbs on the cloud.](https://www.mongodb.com/developer/products/atlas/) Follow the instructions, create a project and/or cluster in Atlas, and enable one or two db users for use with the `MongoDB` connection URI. The Atlas-based URIs have the format `mongodb+srv://{username}:{password}@cluster1.xxxx.mongodb.net/?retryWrites=true&w=majority`. Please replace the username, password, and the exact cluster URI with your own Atlas account settings.
- Go to the `.env` of this API project and update the `MONGO_HOST` environment var with your `MongoDB` URI. If `MongoDB` is running on your local machine, it could be `mongodb://127.0.0.1:27017`. If it is an Atlas cluster, it could be as per the above item.
- After all the above settings are done, please run `npm start` at the root of the API project. This runs the API on a port such as `3002`.
- The API URI is configured in this `ReactJS` `(MERN)` app in the `.env` file like `REACT_API_HOST="http://localhost:3002/api/observations"`. Please update this as per the port your MongoDB NodeJS API is running on. For me, it was `3002` on the local host. 
- On my machine, I followed the steps above and was able to run the `MongoDB` `NodeJS` `API`.
  `process.env.MONGO_HOST:mongodb://127.0.0.1:27017`
   `Server listening on port 3002`
## Available Scripts

In the project directory, you can run:

### `npm start`

**Note: Please run this ReactJS app only after running the NodeJS Web API successfully. The ReactJS app cannot function without the Web API**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

It looks like the following screenshot when you run this `ReactJS` app and have not yet logged in. Click the `Login` button. 

![auth0_reactjs](https://github.com/prasadnarwadkar/MERNAppExampleWithAuth0/assets/8079167/1e6e005b-3c93-4881-85af-d46e6b32d5ad)

This app connects to the `Web API` you have run [at here](http://localhost:3002/api/observations) previously. The `Web API` connects to the `MongoDB` db and fetches the observations. Observation is a healthcare concept that means observation or measurement by a doctor in/on a patient's body.  The observations fetched from the NodeJS Web API are displayed in a table. You can always add a new observation by adding a new coding (with code, coding system, and its display text) using the dialog next to the table. 

It looks like the following screenshot after you log in using your `Auth0` domain user credentials and go to the `Home` page.

![auth0_reactjs_1](https://github.com/prasadnarwadkar/MERNAppExampleWithAuth0/assets/8079167/7cc01640-d24a-4c9e-ae68-a22ce8889479)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
