# 🚀 Backend Authentication API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)

A production-ready **Node.js + Express + MongoDB** backend providing **secure authentication APIs** with **AES-encrypted payloads** and **JWT-based authorization**.  
Designed using clean architecture principles for scalability and maintainability.

---

## ✨ Key Highlights (Interview Friendly)

- Secure **Register & Login** APIs
- **AES encryption/decryption** for request payloads
- **JWT authentication** with protected routes
- Password hashing using **bcrypt**
- Clean layered architecture (Routes → Controllers → Services → Models)
- Centralized error handling & middleware-based auth
- CORS enabled for React frontend integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- CryptoJS (AES-CBC Encryption)
- bcrypt
- dotenv
- nodemon

---

## 📁 Project Structure

```
src/
├── server.js                # App entry point
├── app.js                   # Express configuration
│
├── config/
│   └── db.js                # MongoDB connection
│
├── routes/
│   └── user.routes.js       # API routes
│
├── controllers/
│   └── user.controller.js   # Request/Response handling
│
├── services/
│   └── user.service.js      # Business logic
│
├── models/
│   └── user.model.js        # Mongoose schema
│
├── middlewares/
│   ├── auth.middleware.js   # JWT verification
│   └── error.middleware.js  # Global error handler
│
├── utils/
│   ├── decrypt.js           # AES decryption utility
│   └── jwt.js               # JWT helper
│
└── .env
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auth_demo
JWT_SECRET=your_jwt_secret

AUTH_SECRET_KEY=your_aes_secret_key
AUTH_SECRET_IV=your_16_byte_iv
```

> ⚠️ `AUTH_SECRET_IV` must be exactly **16 bytes** for AES-CBC.

---

## ▶️ Getting Started

### Install dependencies
```
npm install
```

### Start MongoDB
Ensure MongoDB is running locally or use MongoDB Atlas.

### Run server
```
npm run dev
```

Server runs on:
```
http://localhost:5000
```

---

## 🔐 API Endpoints

### Register
```
POST /api/users/register
```
Encrypted payload:
```json
{
  "data": "<AES encrypted payload>"
}
```

### Login
```
POST /api/users/login
```

### Protected Route
```
GET /api/users/profile
Authorization: Bearer <JWT_TOKEN>
```

---

## 🔑 Authentication Flow

1. Client encrypts payload using AES
2. Backend decrypts request
3. Password is hashed with bcrypt
4. JWT token generated on login
5. Protected routes validate JWT via middleware

---

## 🧪 API Example (cURL)

```bash
curl -X POST http://localhost:5000/api/users/login -H "Content-Type: application/json" -d '{ "data": "<encrypted_payload>" }'
```

---

## 🔒 Security Notes

- AES is an **additional security layer**
- HTTPS is mandatory in production
- Passwords are never stored in plain text
- JWT tokens should be stored securely (httpOnly cookies recommended)

---

## 🚀 Future Enhancements

- Refresh token implementation
- Role-based access control (RBAC)
- Request validation (Joi / Zod)
- Rate limiting
- Logging with Winston
- Docker & cloud deployment

---

## 👨‍💻 Author

**Amrendra Kumar**  
Senior Frontend / Full Stack Developer  
React · TypeScript · Node.js · MongoDB
