# **Task Management Application**

🚀 **A full-stack task management app using React, TypeScript, Node.js, and PostgreSQL.**

---

## **\ud83d\udcc0 Table of Contents**

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Documentation](#api-documentation)
- [Demo Video](#demo-video)
- [Salary Expectations](#salary-expectations)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

---

## **\ud83d\udcc0 Overview**

This **Task Management Application** allows users to: ✅ **Register/Login** with authentication (JWT).\
✅ **Create, View, Update, and Delete** tasks.\
✅ **Secure task operations** so only logged-in users can manage tasks.\
✅ **Persist tasks across sessions** (stored in PostgreSQL).

---

## **\ud83d\udcc0 Features**

✅ **User Authentication** (Register & Login).\
✅ **JWT-based authentication** to secure routes.\
✅ **Tasks Management** (Create, Read, Update, Delete).\
✅ **Task Ownership** – Only task creators can modify their tasks.\
✅ **Password Hashing** using `bcrypt` for security.\
✅ **Protected Routes** – Users must log in to access tasks.

---

## **\ud83d\udcc0 Tech Stack**

| **Technology**            | **Purpose**                        |
| ------------------------- | ---------------------------------- |
| **React + TypeScript**    | Frontend framework                 |
| **Node.js + Express.js**  | Backend framework                  |
| **PostgreSQL**            | Database for storing tasks & users |
| **Prisma ORM**            | Database management                |
| **JWT (JSON Web Tokens)** | Authentication                     |
| **Bcrypt**                | Secure password hashing            |
| **Nodemailer**            | Email service for password resets  |

---

## **\ud83d\udcc0 Setup & Installation**

### **\ud83d\udee0\ufe0f Backend Setup**

#### **1\ufe0f\20e3 Clone the Repository**

```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager/backend
```

#### **2\ufe0f\20e3 Install Dependencies**

```sh
npm install
```

#### **3\ufe0f\20e3 Configure Environment Variables**

Create a `.env` file in `backend/` and add:

```
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/taskmanager"
JWT_SECRET="your_secret_key"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
```

- Replace `` with your PostgreSQL password.
- Replace `` with a strong JWT secret.

#### **4\ufe0f\20e3 Set Up Database & Run Migrations**

```sh
npx prisma migrate dev --name init
npx prisma generate
```

✅ This will create `users` and `tasks` tables in PostgreSQL.

#### **5\ufe0f\20e3 Start the Server**

```sh
node server.js
```

\ud83d\udd39 Runs on [**http://localhost:5000**](http://localhost:5000).

---

### **\ud83d\udee0\ufe0f Frontend Setup**

#### **1\ufe0f\20e3 Navigate to the Frontend**

```sh
cd ../frontend
```

#### **2\ufe0f\20e3 Install Dependencies**

```sh
npm install
```

#### **3\ufe0f\20e3 Configure Environment Variables**

Create a `.env` file in `frontend/`:

```
REACT_APP_API_URL=http://localhost:5000/api
```

#### **4\ufe0f\20e3 Start the Frontend**

```sh
npm start
```

\ud83d\udd39 Runs on [**http://localhost:3000**](http://localhost:3000).

---

## **\ud83d\udcc0 API Documentation**

### **1\ufe0f\20e3 Authentication Routes**

| Method | Endpoint                | Description                         |
| ------ | ----------------------- | ----------------------------------- |
| `POST` | `/auth/register`        | Register a new user                 |
| `POST` | `/auth/login`           | Authenticate user & return JWT      |
| `POST` | `/auth/forgot-password` | Sends password reset link via email |
| `POST` | `/auth/reset-password`  | Resets password with a token        |

### **2\ufe0f\20e3 Task Routes** (Protected by JWT)

| Method   | Endpoint     | Description                               |
| -------- | ------------ | ----------------------------------------- |
| `GET`    | `/tasks`     | Fetch all tasks of the logged-in user     |
| `POST`   | `/tasks`     | Create a new task                         |
| `PUT`    | `/tasks/:id` | Update a task (edit title, mark complete) |
| `DELETE` | `/tasks/:id` | Delete a task                             |

---

## **\ud83d\udcc0 Demo Video**

\ud83c\udfa5 [**Click Here to Watch the Demo**](https://your-video-link.com)

---

## **\ud83d\udcc0 Salary Expectations**

\ud83d\udcb0 **Expected Salary:** `$X,XXX per month`\
\ud83c\udf1f **Availability:** Full-time / Part-time / Freelance

---

## **\ud83d\udcc0 Project Structure**

```
task-manager/
│── backend/
│   ├── prisma/              # Database schema & migrations
│   ├── routes/              # Express routes (auth, tasks)
│   ├── server.js            # Main backend server
│   ├── .env                 # Environment variables
│
│── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Login, Tasks, Forgot Password
│   │   ├── App.tsx          # React Router
│   ├── .env                 # Frontend API config
│
│── README.md
│── package.json
│── .gitignore
```

---

## **\ud83d\udcc0 Contact**

\ud83d\udce7 **Email:** [your.email@example.com](mailto\:your.email@example.com)\
\ud83c\udf1f **LinkedIn:** [Your Profile](https://linkedin.com/in/yourprofile)\
\ud83d\udcc4 **GitHub:** [Your GitHub](https://github.com/your-username)

---

### \ud83c\udf89 **Thank you for reviewing my submission!** \ud83d\ude80\ud83d\udd25

Let me know if you have any questions! \ud83d\ude0a

