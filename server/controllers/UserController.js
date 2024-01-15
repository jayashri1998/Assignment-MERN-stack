const User = require('../models/UserModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res) => {
    try {
      const { emailaddress, phonenumber, password, confirmpassword } = req.body;
  
    
      if (password !== confirmpassword) {
        return res.status(400).json({ error: 'Password and confirm password do not match' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        emailaddress,
        phonenumber,
        password: hashedPassword,
        confirmpassword: hashedPassword, 
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  


const login = async (req, res) => {
  try {
    const { emailaddress, password } = req.body;

    const user = await User.findOne({ emailaddress });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successfully', token });
   
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signup, login };
