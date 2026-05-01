# Task Manager App

##  Project Overview
This is a full-stack Task Manager application built with secure authentication and REST APIs. Users can log in, create tasks, and view them through a simple frontend UI.

---

##  Features
- User Login with JWT Authentication
- Protected API Routes
- Task CRUD Operations (Create, Read, Delete)
- MongoDB Database Integration
- Simple React Frontend

---

##  Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React.js

---

##  How to Run the Project

### 🔹 Backend
cd backend  
npm install  
npx nodemon server.js  

### 🔹 Frontend
cd frontend  
npm install  
npm start  

---

##  API Endpoints

### Auth
POST /api/v1/auth/register  
POST /api/v1/auth/login  

### Tasks
GET /api/v1/tasks  
POST /api/v1/tasks  
DELETE /api/v1/tasks/:id  

---

##  Authentication
JWT (JSON Web Token) is used for secure authentication. Protected routes require a valid token in headers.

---

## 📈 Future Improvements
- Role-based admin access
- UI enhancements
- Deployment (Netlify / Render)
