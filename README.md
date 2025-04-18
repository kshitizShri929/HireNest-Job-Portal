# 🚀 HireNest – Full-Stack Job Portal Web App

HireNest is a modern, full-stack job portal web application that connects job seekers with recruiters. It offers an intuitive platform for users to search and apply for jobs, while enabling recruiters to manage listings and find the right candidates.

Built using the powerful **MERN stack (MongoDB, Express, React, Node.js)**, it supports **JWT authentication**, **role-based access**, and **Cloudinary integration** for profile image uploads.

---

## 📸 Demo

> 🌐 Live Demo: _coming soon..._

![screenshot](https://via.placeholder.com/1200x600?text=HireNest+App+Preview)

---

## 🔧 Tech Stack

### 🖥️ Frontend

- React.js
- Redux Toolkit
- TailwindCSS
- React Router DOM
- ShadCN UI
- Lucide Icons
- Sonner (Toast notifications)
- Axios

### 🌐 Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cookie-based sessions (`httpOnly`)
- Cloudinary (for profile images)

---

## 🔐 Key Features

### 👨‍🎓 Student Features
- Signup, login & profile creation
- View job listings
- Search/filter jobs by title or company
- Apply for jobs
- View own profile

### 🧑‍💼 Recruiter Features
- Recruiter dashboard
- Post new jobs
- Manage posted jobs
- View applicants

### ✅ Common
- Role-based access (student & recruiter)
- Protected routes with JWT
- Cloud image uploads (profile pictures)
- Mobile responsive UI
- Real-time toast alerts using `sonner`

---

## 📁 Folder Structure

HireNest/ ├── client/ # React frontend │ └── src/ │ └── components, redux, pages, etc. ├── server/ # Express backend │ └── routes, controllers, models, middleware ├── README.md



---

## 📦 Getting Started

### 🔌 Prerequisites

- Node.js & npm
- MongoDB Atlas account
- Cloudinary account

### 🚀 Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/HireNest.git
cd HireNest
```

cd server
npm install
## Create .env file inside /server

```PORT=8000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
cd client
npm install
npm run dev


✨ Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

💼 Author

Developed by [ShriKant Kshitij]
📧 Email: shritech2025@gmail.com
🔗 GitHub: github.com/kshitizshri929

