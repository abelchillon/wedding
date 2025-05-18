# avwed Project

## Overview
The avwed project is a full-stack application consisting of a Node.js Express backend and a frontend. The backend is designed to interact with a PostgreSQL database, providing a robust API for the frontend to consume.

## Backend

### Technologies Used
- Node.js
- Express
- PostgreSQL
- Sequelize (or pg for direct database interaction)

### Directory Structure
```
backend
├── src
│   ├── config
│   │   └── database.js
│   ├── models
│   │   └── index.js
│   ├── controllers
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   └── middleware
│       └── index.js
├── .env
├── index.js
└── package.json
```

### Setup Instructions
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd avwed/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure the database**
   - Create a PostgreSQL database and update the connection details in the `.env` file.

4. **Run the application**
   ```bash
   npm start
   ```

### API Endpoints
- `/api/hello`: A test endpoint to verify the backend is running.

## Frontend
- The frontend directory contains the client-side application. Further details on its structure and setup will be provided in its own README.

## License
This project is licensed under the MIT License.