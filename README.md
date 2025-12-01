# E-Commerce Application

A full-stack e-commerce application built with React, Node.js, Express, and MongoDB.

## Features

- Product listing with pagination (20 products per page)
- Filter by category and price range
- Modern, responsive UI design
- RESTful API backend
- MongoDB Atlas integration

## Setup Instructions

### Backend Setup

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update `.env` file with your MongoDB password:
   - Replace `<db_password>` with your actual password

4. Seed the database with sample products:
   ```bash
   npm run seed
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```
   Backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   Frontend will run on http://localhost:3000

## API Endpoints

- `GET /api/products` - Get products with pagination and filters
  - Query params: `page`, `limit`, `category`, `minPrice`, `maxPrice`
- `GET /api/products/categories` - Get all unique categories

## Technology Stack

- **Frontend**: React, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
