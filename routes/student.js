const express = require("express");
const router = express.Router();
const logger = require("../Logger/logger");
const { registerStudent, loginStudent } = require("../controllers/student");

//render routes
router.post("/register", registerStudent);
router.post("/login", loginStudent);

//register view
router.get("/register", (req, res) => {
  res.render("register");
});

//register-success view
router.get("/register-success", (req, res) => {
  res.render("register-success");
});

//login view
router.get("/login", (req, res) => {
  res.render("login");
});

//login-success view
router.get("/login-success", (req, res) => {
  res.render("login-success");
});

module.exports = router;
