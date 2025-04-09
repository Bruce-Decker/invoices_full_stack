# Invoice Management System

A full-stack invoice management application built with NestJS, React, and PostgreSQL.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker and Docker Compose
- PostgreSQL (via Docker)

## Project Structure

```
invoices_full_stack/
├── frontend/         # React frontend application
└── src/             # NestJS backend application
```

## Quick Start

### 1. Start the Database

```bash
# Start PostgreSQL using Docker
docker compose up -d
```

### 2. Backend Setup

```bash
# Option 1: Run all setup commands at once
npm install && npx prisma generate && npx prisma migrate deploy && node prisma/seed.js

# Option 2: Run commands individually
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Seed the database
node prisma/seed.js

# Start the backend server
npm run start:dev
```

The backend will be available at http://localhost:3000

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at http://localhost:5174

## Using the Application

### Login
1. Open http://localhost:5174 in your browser
2. Use the following test credentials:
   ```json
   {
       "email": "test@example.com",
       "password": "password123"
   }
   ```
3. Click "Sign in" to access the invoices dashboard

### Invoices Dashboard
- View all your invoices
- Create new invoices
- View invoice details
- Filter and sort invoices

## Screenshots

### Login Page
![Login Page](screenshots/login.png)
The login page where users can authenticate with their credentials.

### Invoices Dashboard
![Invoices Dashboard](screenshots/invoices.png)
The main dashboard showing all invoices after successful login.

### API Documentation
![Postman API 1](screenshots/API_1.png)
![Postman API 2](screenshots/API_2.png)
![Postman API 3](screenshots/API_3.png)


## Running the Application

### Start Everything (New Terminal)
```bash
# Terminal 1: Start the database
docker compose up -d

# Terminal 2: Set up and start the backend
npm install && npx prisma generate && npx prisma migrate deploy && node prisma/seed.js
npm run start:dev

# Terminal 3: Start the frontend
cd frontend && npm install && npm run dev
```

### Stop Everything
```bash
# Stop the frontend (Ctrl+C in Terminal 3)
# Stop the backend (Ctrl+C in Terminal 2)

# Stop the database
docker compose down
```

### Restart Everything
```bash
# Stop everything first
docker compose down

# Then start everything again
docker compose up -d
npm install && npx prisma generate && npx prisma migrate deploy && node prisma/seed.js
npm run start:dev
cd frontend && npm install && npm run dev
```

## Test Credentials

```
Email: test@example.com
Password: password123
```

## API Documentation

- Swagger UI: http://localhost:3000/api
- API Base URL: http://localhost:3000

## Available Endpoints

### Authentication
- POST /auth/login - Login with email and password

### Invoices
- GET /invoices - Get all invoices
- GET /invoices/:id - Get invoice by ID
- POST /invoices - Create new invoice

## Development

### Backend Development
```bash
# Run in development mode with hot reload
npm run start:dev

# Run tests
npm run test
```

### Frontend Development
```bash
cd frontend

# Run in development mode
npm run dev

# Build for production
npm run build
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/invoice_db"
JWT_SECRET="your-secret-key"
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

## Features

- User authentication with JWT
- Invoice management (create, read, update)
- Responsive design
- Form validation
- Error handling
- Data persistence with PostgreSQL
- API documentation with Swagger

## Technologies Used

### Backend
- NestJS
- PostgreSQL
- Prisma ORM
- JWT Authentication
- TypeScript
- Docker

### Frontend
- React
- TypeScript
- Vite
- Redux Toolkit
- React Query
- Tailwind CSS
- Zod for validation
- Axios

## Troubleshooting

1. **Database Connection Issues**
   - Ensure Docker is running
   - Check if PostgreSQL container is up: `docker ps`
   - Verify database credentials in .env file

2. **CORS Issues**
   - Backend is configured to accept requests from localhost:5174
   - Check if frontend URL matches CORS configuration

3. **Authentication Issues**
   - Ensure JWT_SECRET is properly set
   - Check if token is being properly stored
   - Verify credentials match seeded user