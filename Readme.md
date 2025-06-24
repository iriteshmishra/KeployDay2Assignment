
## About Project
This project is a custom REST API server built with **Node.js**, **Express**, and **MongoDB** (via Mongoose). It allows clients to perform CRUD operations on user data, and includes a full testing suite with unit, integration, and API tests using Jest and Supertest.

## 🛠️ Features

- Create, Read, Update, and Delete (CRUD) user data
- MongoDB integration for persistent storage
- Optional frontend integration
- Postman collection included for easy testing
- Full testing suite with unit, integration, and API tests.
- Postman collection included for API testing
- Test coverage report generated on every test run


---

## 🛠️ Set Up Your Project

### A. Tech Stack I have used is

- **Backend**: Node.js + Express  
- **Database**: MongoDB (with Mongoose)  

- **Testing**:  Postman  
- **Docs**: README.md 

---

### Endpoints:

- `GET /api/users` – Get all users
- `GET /api/users/:id` – Get user by ID
- `POST /api/users` – Create a user
- `PUT /api/users/:id` – Full update
- `PATCH /api/users/:id` – Partial update
- `DELETE /api/users/:id` – Delete user

### How to Run

```bash
npm install
node index.js
```

### Run All Tests
```bash
npm test
```

