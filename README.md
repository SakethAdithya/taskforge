
# TaskForge – Scalable Task Management Web App

TaskForge is a full-stack web application that demonstrates secure authentication, protected routes, and a user-centric dashboard for managing tasks. The project is designed with scalability, clean architecture, and modern UI principles in mind.

---

## Features

###  Authentication & Security

* User Registration & Login
* JWT-based authentication
* Password hashing using bcrypt
* Protected routes (Dashboard accessible only after login)

###  Dashboard

* Display logged-in user profile (name & email)
* Create, read, update, and delete tasks
* Toggle task status (Pending / Completed)
* Search tasks by title
* Visual task status indicators
* Logout functionality

###  UI/UX

* Responsive light-theme UI
* Built using TailwindCSS
* Clean, modern, and recruiter-friendly design

---

##  Tech Stack

### Frontend

* React.js (Vite)
* TailwindCSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Tokens (JWT)
* bcrypt

---

##  Project Structure

```
TASKFORGE/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
├── .gitignore
├── README.md
```

---

## How to Run the Project Locally

### 1️ Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

##  API Endpoints

### Authentication

* `POST /api/auth/register` → Register a new user
* `POST /api/auth/login` → Login user and receive JWT

### Tasks (Protected)

* `GET /api/tasks` → Fetch user tasks
* `POST /api/tasks` → Create a new task
* `PUT /api/tasks/:id` → Update task status
* `DELETE /api/tasks/:id` → Delete a task

All task routes require a valid JWT token.

---

##  Scalability & Production Considerations

To scale this application for production:

* Store secrets using environment variables
* Deploy frontend on Vercel or Netlify
* Deploy backend on AWS / Render / Railway
* Add rate limiting and CORS configuration
* Use refresh tokens for long sessions
* Implement pagination for large task lists
* Introduce role-based access if needed
* Add CI/CD pipelines for automated deployment

---

## API Testing

* APIs tested using **Postman**
* JWT token passed via `Authorization: Bearer <token>` header

---

##  Author

**Saketh Adithya**
Computer Science Engineering Undergraduate
Full-Stack Developer




