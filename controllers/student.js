const Student = require("../model/Student");
const router = require("../routes/student");
const logger = require("../Logger/logger");

//register student
const registerStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const student = await Student.create(...req.body);
    res.redirect("/login");
    logger.info("student successfully registered");
  } catch (error) {
    logger.error(error);
  }
};

//login student
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send("<h4>please enter All the required login credentials</h4>");
    }
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(403).send("<h4>invalid login credentials</h4>");
    }
    //if the user exists we compare passwords
    const isPasswordCorrect = await student.comparePasswords(password);
    if (!isPasswordCorrect) {
      return res.status(403).send("<h4>invalid login credentials</h4>");
    }
    res.redirect("/register-success");
    logger.info("student successfully logged in");
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { registerStudent, loginStudent };
