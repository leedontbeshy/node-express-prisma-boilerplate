# API Testing Examples

## Base URL
```
http://localhost:3000
```

## Health Check
```bash
# Check server health
GET http://localhost:3000/health
```

## User API Endpoints

### 1. Get All Users
```bash
# Using curl
curl -X GET http://localhost:3000/api/users

# Using httpie
http GET http://localhost:3000/api/users
```

**Response:**
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": [
    {
      "id": 1,
      "email": "john@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

### 2. Get User by ID
```bash
# Using curl
curl -X GET http://localhost:3000/api/users/1

# Using httpie
http GET http://localhost:3000/api/users/1
```

### 3. Create New User
```bash
# Using curl
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "name": "Jane Doe",
    "password": "password123"
  }'

# Using httpie
http POST http://localhost:3000/api/users \
  email="jane@example.com" \
  name="Jane Doe" \
  password="password123"
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 2,
    "email": "jane@example.com",
    "name": "Jane Doe",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
}
```

### 4. Update User
```bash
# Using curl
curl -X PUT http://localhost:3000/api/users/2 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith"
  }'

# Using httpie
http PUT http://localhost:3000/api/users/2 \
  name="Jane Smith"
```

### 5. Delete User
```bash
# Using curl
curl -X DELETE http://localhost:3000/api/users/2

# Using httpie
http DELETE http://localhost:3000/api/users/2
```

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "message": "User deleted successfully"
  }
}
```

## Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "message": "Validation failed",
  "error": "Invalid email format"
}
```

### Not Found (404)
```json
{
  "success": false,
  "message": "User not found"
}
```

### Server Error (500)
```json
{
  "success": false,
  "message": "Internal Server Error",
  "error": "Error details..."
}
```
