const express = require('express');
require('../src/db/conn');
const router = require("./routers/data");

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3003;

// app.get('/', async(req, res) => {
//     res.send('heellloooo');
// })

app.listen(port, () => {
    console.log(`port is ${port}`);
})