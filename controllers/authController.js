const User = require("../model/user");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // check if the user already exists
      const existingUser = await User.find({ email });

      if (existingUser.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }
      //create a new user object
      const newUser = new User({
        name,
        email,
        password,
      });

      //save the new user
      await newUser.save();
      res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Registration failed" });
    }
  },
};

module.exports = authController;
