const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs').promises;
const mongoose = require('mongoose');
const Reference = require('./model/Reference');

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/lavalstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB ok.'));


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
    await sleep(2000);
    next();
});

app.get('/ws/reference', async (req, res, next) => {
    try {
        const references = await Reference.find();
        res.json(references.map(d => d.toObject()));
    } catch (err) {
        res.status(500).end();
    }
});

app.post('/ws/reference', async (req, res, next) => {
    try {
        const ref = new Reference(req.body);
        await ref.save();
        res.status(204).end();
    } catch (err) {
        res.status(400).json(err);
    }
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

