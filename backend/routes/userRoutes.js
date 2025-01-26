const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User model

// POST route to register a user
// 

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});


module.exports = router; // Export the router
