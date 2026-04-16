<div align="center">
  
# 🩺 Clinicly

### A full-stack doctor appointment booking platform with AI-powered health assistance

[![Live Frontend](https://img.shields.io/badge/🌐%20User%20App-Live-5f6fff?style=for-the-badge)](https://clinicly-frontend.onrender.com)
[![Live Admin](https://img.shields.io/badge/🛠️%20Admin%20Panel-Live-10b981?style=for-the-badge)](https://clinicly-admin.onrender.com)
[![Live Backend](https://img.shields.io/badge/⚙️%20Backend%20API-Live-f59e0b?style=for-the-badge)](https://clinicly-backend-nw3y.onrender.com)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demos](#-live-demos)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)

---

## 🌟 Overview

**Clinicly** is a modern, full-stack healthcare appointment booking platform built with the MERN stack. It connects patients with doctors across multiple specialities — with three separate interfaces for users, doctors, and admins. It features **Razorpay payment integration** for appointment fees and an **AI-powered health assistant chatbot** that helps users identify symptoms and find the right specialist before booking.

---

## 🔗 Live Demos

| Interface | URL |
|-----------|-----|
| 👤 **User App** | [clinicly-frontend.onrender.com](https://clinicly-frontend.onrender.com) |
| 🛠️ **Admin Dashboard** | [clinicly-admin.onrender.com](https://clinicly-admin.onrender.com) |
| ⚙️ **Backend API** | [clinicly-backend-nw3y.onrender.com](https://clinicly-backend-nw3y.onrender.com) |

---

## ✨ Features

### 👤 User Panel
- 🔐 Secure user registration and login with JWT authentication
- 🔍 Browse doctors by speciality (Dermatologist, Gynecologist, General Physician, Pediatrician, Neurologist, Gastroenterologist)
- 📅 Book, view, and cancel appointments
- 💳 **Razorpay payment integration** for appointment fee payments
- 👤 Manage personal profile with photo upload via Cloudinary
- 🤖 **AI Health Assistant** — floating chatbot powered by Groq (Llama 3) for symptom guidance and specialist recommendations
- 📱 Fully responsive design

### 🛠️ Admin Dashboard
- 📊 Overview dashboard with key platform stats
- ➕ Add and manage doctors with profile image upload
- 📋 View and manage all appointments across the platform
- 👨‍⚕️ View and control complete doctors list with availability toggle

### 👨‍⚕️ Doctor Dashboard
- 🗓️ View upcoming and past appointments
- ✅ Mark appointments as completed or cancel them
- 👤 Manage personal profile and availability
- 📊 Personal dashboard with appointment overview

### 🤖 AI Health Chatbot
- Floating chat widget available on all pages
- Powered by **Groq API** with Llama 3.3 70B model
- Understands symptoms and recommends the right specialist from the platform
- Quick symptom suggestion chips for easy start
- Emergency detection — advises calling emergency services when needed
- Maintains full conversation context within the session

### 💳 Payments
- Razorpay integration for secure appointment fee payments
- Supports INR currency
- Payment status tracking per appointment

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

### Services & Tools
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)
![Groq](https://img.shields.io/badge/Groq%20AI-F55036?style=for-the-badge&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## 📁 Project Structure

```
clinicly/
│
├── backend/
│   ├── config/
│   │   ├── mongodb.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── doctorController.js
│   │   ├── userController.js
│   │   └── chatController.js         # AI chatbot logic (Groq)
│   ├── middlewares/
│   │   ├── authAdmin.js
│   │   ├── authDoctor.js
│   │   ├── authUser.js
│   │   └── multer.js
│   ├── models/
│   │   ├── appointmentModel.js
│   │   ├── doctorModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── adminRoute.js
│   │   ├── doctorRoute.js
│   │   ├── userRoute.js
│   │   └── chatRoute.js              # AI chatbot route
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── TopDoctors.jsx
│   │   │   ├── SpecialityMenu.jsx
│   │   │   ├── RelatedDoctors.jsx
│   │   │   └── ChatBot.jsx           # AI floating chat widget
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Appointment.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   ├── MyProfile.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   └── App.jsx
│   └── .env
│
└── admin/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── SideBar.jsx
    │   ├── context/
    │   │   ├── AdminContext.jsx
    │   │   ├── AppContext.jsx
    │   │   └── DoctorContext.jsx
    │   ├── pages/
    │   │   ├── Admin/
    │   │   │   ├── AddDoctor.jsx
    │   │   │   ├── AllAppointments.jsx
    │   │   │   ├── Dashboard.jsx
    │   │   │   └── DoctorsList.jsx
    │   │   └── Doctor/
    │   │       ├── DoctorAppointments.jsx
    │   │       ├── DoctorDashboard.jsx
    │   │       └── DoctorProfile.jsx
    │   ├── Login.jsx
    │   └── App.jsx
    └── .env
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Razorpay account (for payments)
- Groq API key — free at [console.groq.com](https://console.groq.com)

### 1. Clone the repository
```bash
git clone https://github.com/IshitaOberoi/clinicly.git
cd clinicly
```

### 2. Setup Backend
```bash
cd backend
npm install
npm run start
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Setup Admin
```bash
cd admin
npm install
npm run dev
```

---

## 🔑 Environment Variables

### `backend/.env`
```env
MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

ADMIN_EMAIL=admin@clinicly.com
ADMIN_PASSWORD=your_admin_password

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR

GROQ_API_KEY=your_groq_api_key
```

### `frontend/.env`
```env
VITE_BACKEND_URL=http://localhost:4000
```

### `admin/.env`
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 📡 API Endpoints

### User Routes `/api/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | User login |
| GET | `/get-profile` | Get user profile |
| PUT | `/update-profile` | Update profile & photo |
| POST | `/book-appointment` | Book an appointment |
| GET | `/appointments` | Get user appointments |
| POST | `/cancel-appointment` | Cancel appointment |
| POST | `/payment-razorpay` | Initiate Razorpay payment |
| POST | `/verify-razorpay` | Verify payment status |

### Doctor Routes `/api/doctor`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/list` | Get all doctors |
| POST | `/login` | Doctor login |
| GET | `/appointments` | Get doctor's appointments |
| POST | `/complete-appointment` | Mark appointment complete |
| POST | `/cancel-appointment` | Cancel appointment |
| GET | `/dashboard` | Get doctor dashboard stats |
| GET | `/profile` | Get doctor profile |
| POST | `/update-profile` | Update doctor profile |

### Admin Routes `/api/admin`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/login` | Admin login |
| POST | `/add-doctor` | Add a new doctor |
| GET | `/all-doctors` | Get all doctors |
| POST | `/change-availability` | Toggle doctor availability |
| GET | `/appointments` | Get all appointments |
| POST | `/cancel-appointment` | Cancel any appointment |
| GET | `/dashboard` | Get admin dashboard stats |

### Chat Routes `/api/chat`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/message` | Send message to AI health assistant |

---

## 👨‍💻 Author

**Ishita Oberoi**

[![GitHub](https://img.shields.io/badge/GitHub-IshitaOberoi-181717?style=for-the-badge&logo=github)](https://github.com/IshitaOberoi)

---

<div align="center">



</div>
