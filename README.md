# USAF Consuming APIs

Build a the front-end of a single page app that takes that allows a meetup organizer to register attendees for a JS meetup and keep track of who is already registered.

**Note: This prompt is front end only!** The back end is provided for you by json-server. You don't need to understand much about json-server to complete this prompt, but documentation is provided below! You will want to be able to GET and POST data to your json-server, but don't get bogged down trying to understand every minor detail!

## Setup

- [ ] `npm install` to install all dependencies
- [ ] `npm run server` to run the json-server **run before npm start**
- [ ] `npm start` to start your react app

## Requirements

Using React, build your client app inside the src folder provided. A static HTML version of this app exists inside of `public/index.html`, which you will replace with a React app.

**To get started** you will need to go into the `/index.js` file and uncomment the `ReactDOM.render()` line.

Also note the `components` folder in `/src/` Inside here you'll find your `App.js` file. This is a new pattern, typically in React it is considered Best Practice to keep your components in a component folder!

Here's some starter steps to get you going:

1. Create a stateful class component
2. Render and return a div and make sure it is showing up on the page properly
3. Create an API request in your ComponentDidMount using fetch() to your json server (most likely http://localhost:3000 but check your terminal when you start your server!) 
    - Note check the routes listed at the bottom of this readme!
4. After you make a GET request, store the response data in state
5. After you have your data, try to render the names onto the page.
6. Move onto the Stretch Goals!

**Note: Your entire application should not be contained in one component - break up your application into reasonable components.**

The homepage of your application should have:

- A `Current Attendees` list, which should include first + last names of attendes, grouped by experience level (beginner, intermediate, expert)

### Stretch Goals

- Create a `Register Attendee` form, which should include fields for
    - First name
    - Last name
    - Email address
    - Experience Level (one of beginner, intermediate, expert)
- A `Register` button, which when clicked, should:
    - Submit the attendee information to the server
    - Update the Current Attendees list (after the information has been accepted by the server)



## Advanced Content (optional)

Allow the user to click on an attendee in the `Current Attendees` list to edit the attendee's information.


## Available API Routes

For more, check out the json-server documentation!

| Endpoint          | Type   | Operation                 |
|-------------------|--------|---------------------------|
| `/attendees`      | GET    | Get all attendees         |
| `/attendees`      | POST   | Add an attendee           |

Note: For the POST route, you'll need to include an appropriate header to let json-server know the format of the request body.

## Helpful Resources:

- **[json-server Documentation](https://www.npmjs.com/package/json-server)**
- [MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [NPM](https://www.npmjs.com/)
- [React Documentation](https://reactjs.org/docs/hello-world.html)

