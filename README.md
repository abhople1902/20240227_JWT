# Node.js JWT Authentication Example

This is a simple Node.js project demonstrating JWT (JSON Web Tokens) authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installing

Clone the repository and navigate into the project directory.

```
git clone https://github.com/your-username/node-jwt-auth.git
cd node-jwt-auth
```

Install dependencies using npm.

```
npm install
```

### Configuration

Create a `.env` file in the root directory and provide the following environment variables:

```
SECRET_KEY=your_secret_key
```

### Running the Application

Start the Node.js server.

```
npm start
```

The server will start at `http://localhost:3000`.

## Endpoints

### Register

```
POST /api/register
```

Request Body:

```json
{
  "username": "example",
  "password": "password"
}
```

### Login

```
POST /api/login
```

Request Body:

```json
{
  "username": "example",
  "password": "password"
}
```

### Protected Route

```
GET /api/protected
```

Requires JWT token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JWT library

## Authors

- [Your Name](https://github.com/your-username)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
