const mongoose = require('mongoose');
/*
Explanation:
MongoDB connection URL: Replace username, password, and yourdatabase with your actual MongoDB credentials and database name.
Establishing connection to MongoDB: Use mongoose.connect to establish a connection to the MongoDB server. Options like useNewUrlParser and useUnifiedTopology are recommended for compatibility with the latest MongoDB driver features.
Event listener for successful connection: When the connection is successfully established, the 'connected' event is emitted, and a success message is logged to the console.
Event listener for connection errors: If an error occurs during the connection process, the 'error' event is emitted, and an error message is logged to the console.
Event listener for disconnected state: The 'disconnected' event is emitted when the connection to MongoDB is lost.
Gracefully handling process termination: The process.on('SIGINT', ...) block ensures that the application gracefully closes the MongoDB connection when it's terminated (e.g., using Ctrl+C). This helps prevent potential data corruption or other issues.
*/

// MongoDB connection URL
const mongoURI = 'mongodb://username:password@localhost:27017/yourdatabase';

// Establishing connection to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Event listener for successful connection
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection successful!');
});

// Event listener for connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Event listener for disconnected state
mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected!');
});

// Gracefully handling process termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to application termination.');
    process.exit(0);
  });
});
