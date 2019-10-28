const express = require('express');
const serveIndex = require('serve-index');

const app = express();
const port = 3000;

app.get('/ws/reference', (req, res, next) => {
    res.json({ toto: 345, titi: "pelle" });
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

