# List of users

## Description


### Project configuration:

### Client
- Typescript
- React
- React-Router
- Webpack
- Mobx
- Bootstrap
### Server
- Node.js v18.12.1
- Express
- MySql
- JWT
- Sequelize

### Build && Launch

<ol>

<li> Clone the repository to your local machine: </li>

```bash
    git clone https://github.com/KirillSDev/list-of-users
```

<li> Install Node.js version v18.12.1 using nvm: </li>

```bash
    nvm install v18.12.1
```

<li>  Install dependencies using yarn: </li>

```bash
    yarn
    cd client 
    yarn
```

<li>   To run the project, you will need to create a .env file at the root of the project and add the following variables:  </li>

```bash
   SECRET_KEY=key555frogdog
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=root
   DB_DATABASE=my-test4
```

If you do not have these credentials, please contact the project owner to obtain them.

<li> Start the development server: </li>

```bash
   yarn start 
   yarn client
```

