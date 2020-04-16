const express = require("express");
const router = express.Router();
const {
  index: findUsers,
  show: findUser,
  showUser: findTheUser,
  create: createUser,
  update: updateUser,
  destroy: deleteUser,
} = require("../controllers/user");
const { index: findCountries } = require("../controllers/country");
const { index: findTeams } = require("../controllers/team");
const { index: findPlayers } = require("../controllers/player");
const { show: findMovie } = require("../controllers/movie");
const { login, register } = require("../controllers/auth");

// Middlewares
const { authenticated } = require("../middlewares/auth");

// Auth routes
router.post("/login", login);
router.post("/register", register);

// User routes
router.get("/users", findUsers);
router.get("/user", authenticated, findTheUser);
router.get("/user/:id", findUser);
router.post("/users", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

// Country routes
router.get("/countries", findCountries);

// Team routes
router.get("/teams", findTeams);

// Player routes
router.get("/players", findPlayers);

// Movie routes
router.get("/movie/:id", findMovie);

module.exports = router;
