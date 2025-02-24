# **Task Management Application**

🚀 **A full-stack task management app using React, TypeScript, Node.js, and PostgreSQL.**

---

## **📌 Table of Contents**

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

## **📌 Overview**

This **Task Management Application** allows users to:
✅ **Register/Login** with authentication (JWT).  
✅ **Create, View, Update, and Delete** tasks.  
✅ **Secure task operations** so only logged-in users can manage tasks.  
✅ **Persist tasks across sessions** (stored in PostgreSQL).  

---

## **📌 Features**

✅ **User Authentication** (Register & Login).  
✅ **JWT-based authentication** to secure routes.  
✅ **Tasks Management** (Create, Read, Update, Delete).  
✅ **Task Ownership** – Only task creators can modify their tasks.  
✅ **Password Hashing** using `bcrypt` for security.  
✅ **Protected Routes** – Users must log in to access tasks.  

---

## **📌 Tech Stack**

| **Technology**    | **Purpose** |
|------------------|------------|
| **React + TypeScript** | Frontend framework |
| **Node.js + Express.js** | Backend framework |
| **PostgreSQL** | Database for storing tasks & users |
| **Prisma ORM** | Database management |
| **JWT (JSON Web Tokens)** | Authentication |
| **Bcrypt** | Secure password hashing |
| **Nodemailer** | Email service for password resets |

---

## **📌 Setup & Installation**

### **🛠 Backend Setup**

#### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/task-manager.git
cd task-manager/backend
```

#### **2️⃣ Install Dependencies**
```sh
npm install
```

#### **3️⃣ Configure Environment Variables**
Create a `.env` file in `backend/` and add:

```
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/taskmanager"
JWT_SECRET="your_secret_key"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
```

- Replace **`your_password`** with your PostgreSQL password.
- Replace **`your_secret_key`** with a strong JWT secret.

#### **4️⃣ Set Up Database & Run Migrations**
```sh
npx prisma migrate dev --name init
npx prisma generate
```
✅ This will create `users` and `tasks` tables in PostgreSQL.

#### **5️⃣ Start the Server**
```sh
node server.js
```
🔹 Runs on **[http://localhost:3000](http://localhost:3000)**.

---

### **🛠 Frontend Setup**

#### **1️⃣ Navigate to the Frontend**
```sh
cd ../frontend
```

#### **2️⃣ Install Dependencies**
```sh
npm install
```

#### **3️⃣ Configure Environment Variables**
Create a `.env` file in `frontend/`:

```
REACT_APP_API_URL=http://localhost:3000/api
```

#### **4️⃣ Start the Frontend**
```sh
npm start
```
🔹 Runs on **[http://localhost:3000](http://localhost:3000)**.

---

## **📌 API Documentation**

### **1️⃣ Authentication Routes**

| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Authenticate user & return JWT |
| `POST` | `/auth/forgot-password` | Sends password reset link via email |
| `POST` | `/auth/reset-password` | Resets password with a token |

### **2️⃣ Task Routes** (Protected by JWT)

| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/tasks` | Fetch all tasks of the logged-in user |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update a task (edit title, mark complete) |
| `DELETE` | `/tasks/:id` | Delete a task |

---

## **📌 Demo Video**

🎥 **[Click Here to Watch the Demo](https://your-video-link.com)**

---

## **📌 Salary Expectations**

💰 **Expected Salary:** `$X,XXX per month`  
💼 **Availability:** Full-time / Part-time / Freelance  

---

## **📌 Project Structure**

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

## **📌 Contact**

📧 **Email:** [your.email@example.com](mailto:your.email@example.com)  
💼 **LinkedIn:** [Your Profile](https://linkedin.com/in/yourprofile)  
🔗 **GitHub:** [Your GitHub](https://github.com/your-username)  

---

### 🎉 **Thank you for reviewing my submission!** 🚀🔥  
Let me know if you have any questions! 😊

