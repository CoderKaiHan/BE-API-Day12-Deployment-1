const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

//Index
app.get('/', (req,res) => {
    res.status(200).send('Hello World');
});


app.listen(PORT, () => {console.log(`Server is running in port ${PORT}`)})

module.exports = app;