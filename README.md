
---

# Campus Issue Tracker

A modern campus issue reporting and management system built with the **MERN stack**. Campus Issue Tracker allows students to report problems around their campus while enabling staff and administrators to manage, assign, track, and resolve those issues through a centralized platform.

The project is designed as a practical MERN application for learning and demonstrating **authentication, role-based authorization, REST APIs, MongoDB relationships, business workflows, dashboards, and modern React development**.

---

## ✨ Features

### 🔐 Authentication & Authorization

* User registration and login
* JWT-based authentication
* Secure password hashing
* Protected routes
* Role-based access control
* Student, Staff, and Admin roles

### 🐛 Issue Management

* Create and report campus issues
* View issue details
* Edit and delete issues according to permissions
* Categorize issues
* Set issue priority
* Record campus location
* Track issue status
* Assign issues to staff members

### 🔄 Issue Workflow

Issues follow a controlled lifecycle:

```text
Open
  ↓
Assigned
  ↓
In Progress
  ↓
Resolved
  ↓
Closed
```

Issues may also be rejected when they are invalid, inappropriate, duplicated, or otherwise not actionable.

### 💬 Comments & Activity History

* Comment on issues
* View issue discussions
* Track status changes
* Track assignments
* Track priority changes
* Maintain an activity/history timeline

### 🔎 Search & Filtering

Issues can be searched and filtered by:

* Title
* Description
* Location
* Category
* Status
* Priority
* Assigned staff
* Date range

Pagination is supported for larger issue collections.

### 📊 Dashboards

Different dashboards are provided according to user role.

**Students**

* Total reported issues
* Open issues
* In-progress issues
* Resolved issues
* Recent issues

**Staff**

* Assigned issues
* Open issues
* In-progress issues
* Resolved issues
* High/Critical priority issues

**Administrators**

* System-wide issue statistics
* Issues by category
* Issues by status
* Critical issues
* Recent activity
* User and category management

### 🔔 Notifications

The system supports in-app notifications for important events such as:

* Issue assignment
* Status changes
* Issue resolution

Real-time notifications may be added using Socket.IO as a future enhancement.

---

## 🛠️ Tech Stack

### Frontend

* **React**
* **JavaScript**
* **React Router**
* **Axios**
* **Tailwind CSS**

### Backend

* **Node.js**
* **Express.js**
* **JavaScript**
* RESTful API architecture
* JWT authentication

### Database

* **MongoDB**
* **Mongoose**

### Development Tools

* Git & GitHub
* Visual Studio Code
* npm
* Postman
* MongoDB Compass / Atlas

---

## 🏗️ Architecture

The project uses a simple client-server architecture.

```text
campus-issue-tracker/
│
├── client/                  # React frontend
│
├── server/                  # Express backend
│
├── .gitignore
├── README.md
└── .env.example
```

### Backend Architecture

The backend follows a lightweight layered architecture:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Model
  ↓
MongoDB
```

Backend structure:

```text
server/
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── utils/
    ├── validators/
    ├── app.*
    └── server.*
```

### Frontend Structure

```text
client/
└── src/
    ├── components/
    ├── pages/
    ├── layouts/
    ├── routes/
    ├── services/
    ├── hooks/
    ├── context/
    ├── types/
    ├── utils/
    ├── assets/
    ├── App.*
    └── main.*
```

The architecture intentionally avoids unnecessary enterprise abstractions. The goal is to keep the project understandable, maintainable, and suitable for learning.

---

## 👥 User Roles

### Student

Students can:

* Create issues
* View their reported issues
* Track issue progress
* Add comments
* Receive notifications

### Staff

Staff members can:

* View assigned issues
* Update issue status
* Add comments
* Work on reported problems
* Mark issues as resolved

### Admin

Administrators can:

* View all issues
* Assign issues to staff
* Manage users
* Manage categories
* Change priorities
* Moderate issues
* View system-wide statistics

All authorization rules are enforced on the **backend**.

---

## 🗄️ Data Model

The application uses the following primary MongoDB collections:

```text
users
issues
categories
comments
issueHistories
notifications
```

Simplified relationships:

```text
User
 ├── reported Issues
 ├── assigned Issues
 ├── Comments
 └── Notifications

Category
 └── Issues

Issue
 ├── Category
 ├── Reporter
 ├── Assigned Staff
 ├── Comments
 └── History
```

---

## 🔌 API Overview

The backend exposes RESTful API endpoints.

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Issues

```text
GET    /api/issues
POST   /api/issues
GET    /api/issues/:id
PUT    /api/issues/:id
DELETE /api/issues/:id

PATCH  /api/issues/:id/status
PATCH  /api/issues/:id/assign
PATCH  /api/issues/:id/priority
```

### Comments

```text
GET    /api/issues/:id/comments
POST   /api/issues/:id/comments
PUT    /api/comments/:id
DELETE /api/comments/:id
```

### Categories

```text
GET    /api/categories
POST   /api/categories
PUT    /api/categories/:id
PATCH  /api/categories/:id/status
```

### History

```text
GET /api/issues/:id/history
```

### Notifications

```text
GET   /api/notifications
PATCH /api/notifications/:id/read
PATCH /api/notifications/read-all
```

The API may evolve during development as the application's requirements become more refined.

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB
* Git

MongoDB can be installed locally or hosted using a cloud MongoDB provider.

---

### 1. Clone the Repository

```bash
git clone https://github.com/TalhaAhmad-Codes/Campus-Issue-Tracker
cd Campus-Issue-Tracker
```

---

### 2. Configure the Backend

Navigate to the server:

```bash
cd server
npm install
```

Create a `.env` file based on `.env.example`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
CLIENT_URL=http://localhost:5173
```

Never commit the actual `.env` file.

---

### 3. Configure the Frontend

Navigate to the client:

```bash
cd ../client
npm install
```

Configure the frontend environment variables if required.

---

### 4. Start the Backend

From the `server` directory:

```bash
npm run dev
```

The API should become available at:

```text
http://localhost:5000
```

---

### 5. Start the Frontend

From the `client` directory:

```bash
npm run dev
```

The frontend should become available at the URL displayed by the development server, typically:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

The backend requires environment-specific configuration.

Example:

```env
PORT=5000
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=
CLIENT_URL=
```

A `.env.example` file should be committed to the repository, while actual environment files must remain ignored by Git.

---

## 🧪 Testing

API endpoints can be tested using tools such as:

* Postman

Important areas to test include:

* Authentication
* Protected endpoints
* Role-based authorization
* Issue creation
* Issue assignment
* Status transitions
* Comments
* Search and filtering
* Invalid requests
* Unauthorized operations

Automated tests can be introduced as the project matures.

---

## 📈 Development Roadmap

The project is developed incrementally.

### Phase 1 — Foundation

* ✅ Project setup
* ✅ React application
* ✅ Express server
* ✅ MongoDB connection
* ✅ Environment configuration

### Phase 2 — Authentication

* ✅ User registration
* [ ] Login
* [ ] JWT authentication
* ✅ Password hashing
* [ ] Protected routes
* [ ] Role-based authorization

### Phase 3 — Issue Management

* [ ] Issue creation
* [ ] Issue listing
* [ ] Issue details
* [ ] Issue editing
* [ ] Issue deletion
* [ ] Categories
* [ ] Priorities
* [ ] Locations
* [ ] Status workflow

### Phase 4 — Staff Workflow

* [ ] Staff management
* [ ] Issue assignment
* [ ] Staff dashboard
* [ ] Status updates
* [ ] Permission validation

### Phase 5 — Collaboration

* [ ] Comments
* [ ] Issue history
* [ ] Activity timeline

### Phase 6 — Discovery & Analytics

* [ ] Search
* [ ] Filtering
* [ ] Pagination
* [ ] Student dashboard
* [ ] Staff dashboard
* [ ] Admin dashboard
* [ ] Statistics

### Phase 7 — Notifications

* [ ] Notification model
* [ ] Assignment notifications
* [ ] Status notifications
* [ ] Read/unread functionality

### Future Enhancements

* [ ] Image/file attachments
* [ ] Socket.IO real-time notifications
* [ ] Email notifications
* [ ] Charts and advanced analytics
* [ ] QR codes for campus locations
* [ ] Duplicate issue detection
* [ ] AI-powered issue categorization
* [ ] AI-generated summaries
* [ ] SLA/deadline tracking

---

## 🎯 Project Scope

Campus Issue Tracker is intentionally focused.

It is **not intended to become**:

* A complete university ERP
* A full Jira clone
* A complete helpdesk SaaS
* A Learning Management System
* A CRM
* A microservice-based distributed system

The primary goal is to build a realistic and manageable MERN application that demonstrates practical full-stack development.

---

## 🔒 Security

The application follows basic security practices including:

* Password hashing
* JWT authentication
* Backend authorization
* Input validation
* Protected API endpoints
* Environment-based secrets
* No password hashes in API responses
* Proper HTTP status codes
* Restricted administrative operations

Production deployments should additionally consider rate limiting, security headers, secure cookie configuration, and other deployment-specific security measures.

---

## 📄 License

It's licensed under [**MIT License**](/LICENSE).

---

## 📌 Project Status

**Status:** 🚧 In Development

The project is being developed incrementally, starting with the core MERN functionality and gradually introducing additional features.

---

## 👨‍💻 Purpose

This project is primarily intended as a practical MERN learning project and portfolio application.

It focuses on learning how to build a complete full-stack application with:

```text
React
   ↓
Express.js
   ↓
Node.js
   ↓
MongoDB
```

while applying real-world concepts such as authentication, authorization, relationships, workflows, validation, dashboards, and REST API design.
