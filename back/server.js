const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const references = [];

app.get('/ws/reference', (req, res, next) => {
    res.json({ toto: 345, titi: "pelle" });
});

app.post('/ws/reference', (req, res, next) => {
    references.push(req.body);
    fs.writeFileSync('references.json', JSON.stringify(references));
    res.status(204).end();
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

