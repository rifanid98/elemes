# Elemes Backend

### Disclaimer

> This is a project created for the purposes of a test case from the hiring process at [Elemes.id](https://elemes.id)

## Database Config

- Please use the MySQL database as stated in the test case.
- Create database elemes ```CREATE DATABASE IF NOT EXIST elemes```.
- Change the database configuration in the ```.env.stage.local``` file in the ```TYPEORM``` section.
- The migration will be executed automatically when the server starts.

## Cloudinary Config

Change the cloudinary credentials with your existing credentials in the ```src/di/provider/cloudinary.provider.ts```
file. Otherwise, server will not run.

## Getting Started

- Install dependencies ```yarn install```.
- Run the server ```yarn start:local```.
- Make sure the logs are all green.
- Server started at ```localhost:3000```.
- Visit swagger at ```localhost:3000/docs```.

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
- e2e test ```yarn test:e2e```.

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
