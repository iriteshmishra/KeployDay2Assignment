const express = require('express');
const fs = require('fs');
let users = require('./DATA.json'); // use `let` for mutability
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Required for parsing JSON body

// ✅ GET all users
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// ✅ GET one user
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user || { error: "User not found" });
});

// ✅ POST - create new user
app.post("/api/users", (req, res) => {
  const body = req.body;
  const newUser = { ...body, id: users.length + 1 };
  users.push(newUser);
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "success", user: newUser });
  });
});

// ✅ PUT - update full user
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...req.body, id };
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "updated", user: users[index] });
  });
});

// ✅ PATCH - partial update
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...users[index], ...req.body };
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "patched", user: users[index] });
  });
});

// ✅ DELETE - remove user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(user => user.id !== id);
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "deleted", id });const express = require('express');
const fs = require('fs');
let users = require('./DATA.json'); // use `let` for mutability
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Required for parsing JSON body

// ✅ GET all users
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// ✅ GET one user
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user || { error: "User not found" });
});

// ✅ POST - create new user
app.post("/api/users", (req, res) => {
  const body = req.body;
  const newUser = { ...body, id: users.length + 1 };
  users.push(newUser);
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "success", user: newUser });
  });
});

// ✅ PUT - update full user
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...req.body, id };
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "updated", user: users[index] });
  });
});

// ✅ PATCH - partial update
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users[index] = { ...users[index], ...req.body };
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "patched", user: users[index] });
  });
});

// ✅ DELETE - remove user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(user => user.id !== id);
  fs.writeFile('./DATA.json', JSON.stringify(users, null, 2), () => {
    return res.json({ status: "deleted", id });
  });
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));

  });
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
