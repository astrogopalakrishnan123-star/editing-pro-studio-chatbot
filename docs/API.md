# Editing Pro Studio Chatbot - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Chat Endpoints

### Send Message
**POST** `/chat/send`

Send a message to the AI chatbot.

**Request Body:**
```json
{
  "customerId": "string",
  "message": "string",
  "conversationId": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Bot reply",
  "conversationId": "uuid"
}
```

### Get Chat History
**GET** `/chat/history/:customerId`

Retrieve chat history for a customer.

**Response:**
```json
{
  "success": true,
  "messages": []
}
```

### Upload File
**POST** `/chat/upload`

Upload project files.

**Request:** Form data with file
```
customerId: string
file: File
```

**Response:**
```json
{
  "success": true,
  "fileUrl": "string",
  "message": "File uploaded successfully"
}
```

---

## Booking Endpoints

### Create Booking
**POST** `/bookings/create`

**Request Body:**
```json
{
  "customerId": "string",
  "serviceId": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "projectDetails": "string",
  "email": "string",
  "phone": "string"
}
```

### Get Availability
**GET** `/bookings/availability`

Get available booking slots.

**Response:**
```json
{
  "success": true,
  "availability": {
    "availableDates": [],
    "availableTimes": []
  }
}
```

### Get Customer Bookings
**GET** `/bookings/customer/:customerId`

### Cancel Booking
**DELETE** `/bookings/cancel/:bookingId`

---

## Service Endpoints

### Get All Services
**GET** `/services/all`

**Response:**
```json
{
  "success": true,
  "services": [
    {
      "id": "uuid",
      "name": "Video Editing",
      "description": "Professional video editing",
      "category": "editing",
      "price": 50,
      "turnaroundTime": "2-3 days"
    }
  ],
  "total": 8
}
```

### Get Service by ID
**GET** `/services/:serviceId`

### Create Service (Admin)
**POST** `/services/create`

Requires admin authentication.

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "category": "string",
  "price": "number",
  "turnaroundTime": "string"
}
```

---

## Lead Endpoints

### Create Lead
**POST** `/leads/create`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "serviceType": "string",
  "budget": "number",
  "message": "string"
}
```

### Submit Lead Form
**POST** `/leads/submit-form`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "serviceType": "string",
  "projectDetails": "string",
  "budget": "number"
}
```

### Get All Leads (Admin)
**GET** `/leads/all`

Requires admin authentication.

---

## Authentication Endpoints

### Register
**POST** `/auth/register`

**Request Body:**
```json
{
  "email": "string",
  "password": "string",
  "name": "string",
  "role": "user" (optional)
}
```

### Login
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token"
}
```

### Get Profile
**GET** `/auth/profile`

Requires authentication.

### Update Profile
**PUT** `/auth/update-profile`

Requires authentication.

---

## Admin Endpoints

### Get Dashboard
**GET** `/admin/dashboard`

Requires admin authentication.

**Response:**
```json
{
  "success": true,
  "dashboard": {
    "totalBookings": 0,
    "totalLeads": 0,
    "totalRevenue": 0,
    "conversionRate": 0
  }
}
```

### Get Analytics
**GET** `/admin/analytics`

### Get Settings
**GET** `/admin/settings`

### Update Settings
**PUT** `/admin/settings`

---

## Webhook Endpoints

### WhatsApp Webhook
**POST** `/webhook/whatsapp`

Receives WhatsApp messages from Twilio.

### Verify WhatsApp
**GET** `/webhook/whatsapp`

Webhook verification endpoint.

---

## Error Responses

All errors follow this format:
```json
{
  "error": "Error message"
}
```

Common status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

## Rate Limiting

API has rate limiting enabled:
- **Window**: 15 minutes
- **Limit**: 100 requests per window

---

## Socket.io Events

### Client Events
- `join-chat` - Join a chat room
- `send-message` - Send a message
- `disconnect` - Disconnect from socket

### Server Events
- `receive-message` - Receive a message
- `user-joined` - User joined chat
- `user-left` - User left chat
