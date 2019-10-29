const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lavalstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB ok.'));

const Reference = mongoose.model('Reference', {
    label: { type: String, required: true, unique: true },
    category: String,
    quantity: String,
    price: String,
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
    try {
        references.push(req.body);
        fs.writeFileSync('references.json', JSON.stringify(references));

        try {
            const ref = new Reference(req.body);
            await ref.save();
    
        } catch (err) {
            res.status(400).json(err);
        }
        
        res.status(204).end();
    } catch (err) {
        res.status(500).end();
    }

});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

