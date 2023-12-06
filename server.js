const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/designCard', (req, res) => {
    res.send("Please fill out some information to help us generate the perfect card for you!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`);
});
