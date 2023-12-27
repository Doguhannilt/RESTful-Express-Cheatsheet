// npm install express bcrypt body-parser

const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Mock user database (In a real-world scenario, you'd use a proper database)
const users = [];

// Endpoint to serve the HTML registration form
app.get('/register-form', (req, res) => {
  // Send the registration form HTML file
  res.sendFile(__dirname + '/register-form.html');
});

// Endpoint to process form submission
app.post('/register', async (req, res) => {
  try {
    // Extract form data from the request
    const { name, username, password } = req.body;

    // Check if the username is already taken
    if (users.find(user => user.username === username)) {
      // Respond with a 400 status code and a message if the username is taken
      return res.status(400).send('Username is already taken');
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the mock database
    users.push({ name, username, password: hashedPassword });

    // Respond with a success message
    res.send('User registered successfully');
  } catch (error) {
    // Respond with a 500 status code and the error message if an error occurs
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


