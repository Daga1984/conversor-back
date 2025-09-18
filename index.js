const express = require('express');
const cors = require('cors');
const router = require('./routes/conversorRoutes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/conversor', router);

app.get('/health', (req, res) => {
    res.status(200).json({ "status": "api funcionando correctament!" })
})

app.listen(3500, () => {
    console.log("Listening at port 3500");
})