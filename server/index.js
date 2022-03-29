const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3000

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)