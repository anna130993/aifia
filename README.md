# Art Is Fashion Is Art

Simple store app providing custom made clothes with art masterpieces on them - all used paintings are currently available in public domain.

FRONTEND:
- React,
- Redux,
- Material UI,
- Axios.

BACKEND:
- Express,
- MongoDB,
- Mongoose.

(I am fully aware that for security purposes mongodb atlas password should never be exposed that way - unfortunately, due to quickly impending deadline, I was unable yet to resolve that issue. It will, however, be my first priority and hopefully, it will be resolved very quickly. :) )

# Planned updates / to-do list
- fix bug with order's phone number (shows error with no actual error with successfull order),
- fix bug with sizes - make it so only even numbers are provided,
- add Select option for provided paintings - so they travel alongside order, size and comment straight to server side,
- add user verification/registration/logging process via Google and Facebook (using Passport and OAuth),
- probably many more as well!

# Deployed version
https://aifia-26139.web.app/ (still needs locally running server in order to show products!)

# Running project locally
All you have to do is run `yarn install` and then `yarn start` - you'll be able to see the app in browser (http://localhost:3000) with the server (http://localhost:8000) running in the background!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
