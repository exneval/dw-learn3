const express = require("express");
const router = express.Router();
const {
  index: findUsers,
  show: findUser,
  create: createUser,
  update: updateUser,
  destroy: deleteUser,
} = require("../controllers/user");
const { index: findCountries } = require("../controllers/country");
const { index: findTeams } = require("../controllers/team");
const { index: findPlayers } = require("../controllers/player");

// User routes
router.get("/users", findUsers);
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

module.exports = router;
