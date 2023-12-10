# Express Todo API with PostgreSQL and Sequelize

A simple and flexible Todo API built with Express.js and PostgreSQL, using Sequelize as the ORM.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database](#database)
- [Contributing](#contributing)

## Features

- CRUD operations for managing todo items.
- Sequelize ORM for database interactions.
- Express.js for handling HTTP requests and routing.
- PostgreSQL as the database.
- Well-organized project structure for easy maintenance.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (at least version 12)
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emreozturanli/express-todo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-todo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a PostgreSQL database for the project.

2. Copy the `.env.example` file to a new file named `.env` and update the database connection details:

   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/your_database
   ```

## Usage

Start the server:

```bash
npm run dev
```

The API will be available at `http://localhost:8000` by default.

## Endpoints

- `GET /todos`: Get all todos.
- `GET /todos/:id`: Get a specific todo.
- `POST /todos`: Create a new todo.
- `PUT /todos/:id`: Update a todo.
- `DELETE /todos/:id`: Delete a todo.

## Database

This project uses Sequelize as the ORM. You can find the database models in the `models` directory.

## Contributing

Feel free to contribute by opening issues or creating pull requests.

---

Feel free to customize the sections and add any other relevant information specific to your project.
