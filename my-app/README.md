![alt text](<Screenshots/Screenshot from 2025-10-19 22-19-13.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 21-18-32.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 19-17-09.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 19-00-16.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 16-09-45.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 16-09-18.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 16-08-16.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 16-05-53.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 16-03-13.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 15-55-12.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 15-54-40.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 15-53-24.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 15-52-15.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 15-51-19.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 13-27-10.png>) ![alt text](<Screenshots/Screenshot from 2025-10-19 13-20-20.png>)



PROJECT STRUCTURE


my-blog/
├── client/                      # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Static images, icons
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Route-based pages (Home, Post, Login)
│   │   ├── routes/              # React Router config
│   │   ├── services/            # API calls (Axios + Clerk)
│   │   ├── context/             # Global state (e.g. user, theme)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── .env.example             # VITE_CLERK_PUBLISHABLE_KEY, VITE_API_URL
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                      # Express backend
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/            # Logic for posts, uploads
│   ├── middleware/             # Clerk JWT auth, error handling
│   ├── models/                 # Mongoose schemas (User, Post, Comment)
│   ├── routes/                 # API routes
│   ├── uploads/                # Uploaded images
│   ├── index.js                # Entry point
│   ├── .env.example            # MONGO_URI, CLERK_SECRET_KEY, PORT
│   └── package.json
│
├── screenshots/                # Screenshots for README
│   ├── login-page.png
│   ├── post-list.png
│   └── dashboard.png
│
├── .gitignore                  # Ignore node_modules, .env, etc.
├── README.md                   # Project overview, setup, API docs
└── LICENSE                     # Optional: MIT or your preferred license


🛠️ Key Environment Variables
client/.env.example
env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000/api
server/.env.example
env
MONGO_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
PORT=5000



📦 Recommended Packages
Frontend
@clerk/clerk-react

axios

react-router-dom

tailwindcss

Backend
express

mongoose

dotenv

@clerk/clerk-sdk-node

multer (for image uploads)

cors


1. Complete Client and Server Code
Your repo should have two main folders:

Code
my-blog/
├── client/       ← React + Tailwind frontend
├── server/       ← Express + MongoDB backend
├── README.md     ← Comprehensive project guide
├── .env.example  ← Root-level optional if needed
Each folder should contain:

client/
src/ with components, pages, and styles

tailwind.config.js, postcss.config.js

vite.config.js or webpack.config.js

.env.example with:

env
VITE_API_URL=http://localhost:5000/api
server/
models/, routes/, controllers/, middleware/

server.js or index.js

.env.example with:

env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
✅ 2. .env.example Files
These are safe-to-share templates that show required environment variables without exposing secrets.

Include one in both client/ and server/ folders. Make sure your actual .env files are listed in .gitignore.


# MERN Blog Application

## 📝 Project Overview
A full-stack blog platform built with MongoDB, Express.js, React.js, and Node.js. Users can create, edit, and delete posts, upload images, and comment on articles.

## 🚀 Setup Instructions

### Backend
```bash
cd server
npm install
cp .env.example .env
npm run dev
Frontend
bash
cd client
npm install
cp .env.example .env
npm run dev
📡 API Documentation
POST /api/posts
Create a new blog post Body: { title, content, image }

GET /api/posts
Fetch all posts

GET /api/posts/:id
Fetch a single post

PUT /api/posts/:id
Update a post

DELETE /api/posts/:id
Delete a post

POST /api/comments
Add a comment to a post

✨ Features Implemented
User authentication (JWT)

Create, edit, delete blog posts

Image upload with preview

Comment system

Responsive UI with Tailwind CSS

Search and filter posts

Pagination

📦 Tech Stack
MongoDB + Mongoose

Express.js

React + Vite

Node.js

Tailwind CSS