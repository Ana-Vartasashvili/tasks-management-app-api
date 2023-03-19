### API for Task Management App

Using the API you can do CRUD operations on tasks and application users.

#

## Prerequisites

- <img style="padding-right:10px;" align="left"  src="readme/assets/nodejs.png"   height="22"/> <p>_Node JS @12.X and up_</p>
- <img style="padding-right:10px;" align="left"  src="readme/assets/npm.png"   height="20"/> <p>_npm @6 and up_</p>

#

## Tech Stack

- <img style="padding-right:10px;" align="left"  src="readme/assets/nodejs.png"   height="25"/> <p><a href="https://nodejs.org/en/" target="_blank">[NodeJS @16.15.1]</a> - JavaScript runtime built on Chrome's V8 JavaScript engine<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/express.png"   height="25"/> <p><a href="https://expressjs.com/" target="_blank">[Express @4.18.1]</a> - Fast, unopinionated, minimalist web framework for Node.js<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/mongodb.png"   height="25"/> <p><a href="https://www.mongodb.com/" target="_blank">[MongoDB]</a> - Open source NoSQL database management program<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/mongoose.png"   height="25"/> <p><a href="https://mongoosejs.com/" target="_blank">[mongoose @6.3.6]</a> - elegant mongodb object modeling for node.js<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/express-validator.png"   height="25"/> <p><a href="https://express-validator.github.io/docs/" target="_blank">[express-validator @6.14.2]</a> - express.js middlewares that wraps validator.js validator and sanitizer functions<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/jsonwebtoken.png"   height="25"/> <p><a href="https://jwt.io/" target="_blank">[jsonwebtoken @8.5.1]</a> - JWT.IO allows you to decode, verify and generate JWT<p/>

#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/Ana-Vartasashvili/tasks-management-app-api.git
```

2\. Navigate to the repository

```sh
cd tasks-management-app-api/
```

3\. Next step requires install all the dependencies

```sh
npm install
```

or

```sh
yarn install
```

4\. Copy .env

```sh
cp .env
```

5\. If you want you can also change default configuration of .env file and connect to mongodb

```sh
DATABASE_CONNECTION_URL = connection-url
DATABASE_PASSWORD = password
JWT_ACCESS_TOKEN = secret-text
```

6\. For the first time before run the API run following command:

```sh
npx tsc
```

7\. After that you can run Task Management App API from terminal:

```sh
npm run dev
```

#

## Project Structure

```bash
├─── config
├─── controllers
├─── middlewares
├─── models
├─── readme
├─── routes
└─── schemas
- .env
- .gitignore
- .prettierrc.json
- app.js
- package-lock.json
- package.json
- README.md
```
