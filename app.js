const express = require('express');
const app = express();

// Serve static files from /public
app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Docker + Express!' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});