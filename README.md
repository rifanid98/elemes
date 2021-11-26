# Elemes Backend

### Disclaimer

> This is a project created for the purposes of a test case from the hiring process at [Elemes.id](https://elemes.id)

## Database Config

- Please use the MySQL database as stated in the test case.
- Create database elemes ```CREATE DATABASE IF NOT EXIST elemes```.
- Change the database configuration in the ```.env.stage.local``` file in the ```TYPEORM``` section.

## Cloudinary Config

Change the cloudinary credentials with your existing credentials in the ```src/di/provider/cloudinary.provider.ts```
file. Otherwise, server will not run.

## Getting Started

- Install dependencies ```yarn install```.
- Run the server ```yarn start:local```.
- Make sure the logs are all green.
- Server started at ```localhost:3000```.
- Visit swagger at ```localhost:3000/docs```.

Or you can visit the deployed endpoints [here](https://elemes-adnin.herokuapp.com/) and visit
the [swagger](https://elemes-adnin.herokuapp.com/docs) docs.

## Database Seeding

- The migration will be executed automatically when the server starts.
- Run ```yarn typeorm migration:run``` or ```npm run typeorm migration:run``` to seed default data.
- If you faced an error when executing migration command, please visit ```localhost:3000/auth/migrate``` (localhost)
  or ```https://elemes-adnin.herokuapp.com/api/auth/migrate``` (if you have to). Some text editors or IDEs sometimes
  cache the TypeORM config and cause TypeORM anomalies.

### !Notes

If you faced an error response when executing the migration through the endpoint, it means a conflict occurred
indicating that the data was migrated before (by me or by someone else).

After the migration is executed, there will be 2 roles and 2 users (Staff & Admin)

```json
// Admin User Credentials

{
  "email": "staff@email.com",
  "password": "P@ssword"
}

// Staff User Credentials

{
  "email": "admin@email.com",
  "password": "P@ssword"
}
```

If you create a new user using the ```/users``` or ```/auth/signup``` endpoints, the user will be created with no
attached role. That way you can test whether the role based authentication is working or not.

## Authentication Flow

Basic authentication :

- Signup
- Signin (returns jwt code and you can use it to access endpoints)

2FA Authentication :

- Signin
- Signup (returns jwt token)
- Use jwt tokens to access ```/auth/authenticator``` (returns qrcode url, copy it and paste it at browser url then hit
  enter. Scan the qrcode with authenticator app. ex: google authenticator)
- Use jwt tokens to access ```/auth/authenticate``` and use code from authenticator app and send it (returns final jwt
  token with 2FA enabled, authenticator = true)

## Test

- Unit test ```yarn test```.
- e2e test ```yarn test:e2e``` (not finished yet, still error at some tests)

## Features

- [x] Authentication endpoints using jwt with third party authenticator
- [x] CRUD Course endpoints
- [x] CRUD Users endpoints
- [x] Statistic endpoint
- [x] Swagger out of the box :)
- [x] Role based authentication for each endpoint. ex: Only admin and super admin roles to get access for Update and
  Delete operation.

## Stacks

- Node.js (using Nest.js framework)
- MySQL
- JWT
- TypeORM
- Cloudinary
- Git
- Clean Architecture Design Pattern
