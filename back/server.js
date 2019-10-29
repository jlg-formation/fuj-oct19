const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'lavalstore';

const client = new MongoClient(url, { useUnifiedTopology: true });

let db;

client.connect(err => {
    if (err) {
        console.log('Cannot connect to DB...');
        return;
    }
    console.log("Connected successfully to server");

    db = client.db(dbName);

});




const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const references = [];

app.get('/ws/reference', (req, res, next) => {
    res.json({ toto: 345, titi: "pelle" });
});

app.post('/ws/reference', async (req, res, next) => {
    references.push(req.body);
    fs.writeFileSync('references.json', JSON.stringify(references));

    await db.collection('reference').insertOne(req.body);

    res.status(204).end();
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

