# Merchant Dummy Top-Up Application

## Description
The Merchant Dummy Top-Up Application is a demonstration app that allows users to top up their wallets using Globiance. This app consists of two main components: the User Interface (UI) and the Server. The UI is built with modern web technologies, and the server is implemented using Express and PostgreSQL. The application listens to webhooks provided by Globiance to handle payment notifications and updates.

## Prerequisites
- Node.js version >= 20.12.0
- PostgreSQL database

## Setup Instructions

### 1. UI Setup

#### Environment Configuration
1. Create a `.env` file by copying from `.env.example` and make necessary changes according to the deployment environment.

#### Running the UI

change directory to `web`

```
$ cd web
```

run command to start local server

```
$ npm run start
```

## Building UI

change directory to `web`

```
$ cd web
```

run command to build production ready package

```
$ npm run build
```

### 2. Server Setup

#### Environment Configuration
1. Create a `.env` file by copying from `.env.example`.
2. Set the environment variables in the `.env` file. Example:
```
PORT=

DB_HOST=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=

JWT_SECRET=
```

#### Database Initialization
1. Use the provided `docker-compose.yml` file to initiate the PostgreSQL database:
```bash
$ docker-compose up -d
```

#### Running the Server
1. Change directory to the server directory:
```bash
$ cd Server
```
2. Install server dependencies:
```bash
$ npm install
```
3. Start the server:
```bash
$ npm run start
```

### 3. Webhook Setup

1. Configure the webhook by following the instructions provided by Globiance:
   [Globiance Webhook Setup](https://developers.globiance.com/docs/globiance-checkout/api/webhook)

## Notes
- Ensure all environment variables are correctly set in the `.env` file.
- Refer to the Globiance documentation for detailed instructions on webhook configuration.

This guide provides a comprehensive setup for both the UI and server components of the Merchant Dummy Top-Up application, facilitating a seamless integration and deployment process.