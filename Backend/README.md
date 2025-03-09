# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

## Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing the user's email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "firstname must have 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must have 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```


# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to log in an existing user. It requires the user's email and password.

## Request Body
The request body should be a JSON object containing the following fields:
- `email`: A string representing the user's email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```


## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must have 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### User Not Found
- **Status Code**: `404 Not Found`
- **Response Body**: A JSON object containing an error message.
Example:
```json
{
  "message": "User not found"
}
```

### Invalid Credentials
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Invalid credentials"
}
```

# Get User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint is used to get the profile of the currently authenticated user.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the user's profile details.

Example:
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint is used to log out the currently authenticated user. It clears the authentication token and blacklists it.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing a success message.

Example:
```json
{
  "message": "Logged out successfully"
}
```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.
Example:
```json
{
  "message": "Unauthorized"
}
```

# User Model

## Schema
The user model schema defines the structure of the user documents in the MongoDB database.

### Fields
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing the user's email address (required, unique, minimum length of 5 characters)
- `password`: A string representing the user's hashed password (required, not selected by default)
- `socketId`: A string representing the user's socket ID (optional)

### Methods
- `generateAuthToken()`: Generates a JWT token for the user.
- `comparePassword(password)`: Compares the provided password with the user's hashed password.
- `hashPassword(password)`: Hashes the provided password using bcrypt.

```