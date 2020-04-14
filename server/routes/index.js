const express = require("express");
const router = express.Router();

const todos = [
  {
    id: 1,
    title: "Swimming",
  },
  {
    id: 2,
    title: "Eating",
  },
  {
    id: 3,
    title: "Running",
  },
];

router.get("/todos", (req, res) => res.send({ data: todos }));

router.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  res.send({ data: todos[id - 1] });
});

router.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.send({ data: newTodo });
});

router.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos[id - 1] = { ...todos[id - 1], ...req.body };
  res.send({ data: todos });
});

router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos.splice(id - 1, 1);
  res.send({ data: todos });
});

module.exports = router;
