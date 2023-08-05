const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorizeRoles = require("../middlewares/authorizeRoles");
const { SUPERUSER } = require("../constants/roles");
const migrations = require("../controllers/userMigrations");

router.patch("/userDefaultColor", authenticate, authorizeRoles([SUPERUSER]), migrations.addDefaultColors);

module.exports = router;
