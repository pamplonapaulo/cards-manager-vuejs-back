# Credit Card Management System (Repo 2/2)

## What's inside it?
* Public user interface (front-end)
* Admin interface (front-end)
* Back-End (Knex database and APIs)

## Dependencies (Front-End):
- vue `>=` v3
- vue-router `>=` v4
- axios `>=` v0.21

## Dependencies (Back-End):
- celebrate `>=` v12
- cors `>=` v2.8
- cross-env `>=` v7
- express `>=` v4.17
- knex `>=` v0.2
- sqlite3 `>=` v4.1

## Up and running
- Clone the Front-End repository: `git clone git@github.com:pamplonapaulo/cards-manager-vuejs-front.git`;
- Clone the Back-End repository: `git clone git@github.com:pamplonapaulo/cards-manager-vuejs-back.git`;
- Remove `.git` directory on both repositories;
- Install dependencies: `yarn` (or `npm i`);
- Run `yarn dev` (or `npm start`) to develop on `http://localhost:3000`
- Run `yarn build` (or `npm run build`) for production build (files will be generated on `dist` directory)

## Main routes
* Public: 'http://localhost:3000/'
* Admin: 'http://localhost:3000/admin'

## Current pendencies
* Include Admin Create Card Page
* Include Admin Delete + Edit API calls
* Include Admin Edit (Post) API Controller
* Include Admin Login Authentication Admin's home, with static credentials
* Include localStorage as storage
* Include Admin Filter/Search query
* Include validation for all edit or create functionalities, including alerts for errors
* Include Confirmation Dialog for Delete and Save(Edit)
* Implement State Management with VueX
* Include Unit Tests
* Huge refactoring and review in order to achieve best practices

## Pending Bugs
* Since VueX or other State Management hasn't been installed yet, our development faced a weird behavior managing data after get the response.data from our API request. Somehow the data is being converted from an array of objects into a Proxy.

## Scripts

- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn build (or npm run build)`: Build project to production

## License

[MIT] &copy; Paulo da Silva Pamplona
