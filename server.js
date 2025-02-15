const express = require('express');
const { readFile } = require('fs/promises');
const app = express();
const PORT = 3000;

/* app.get('/', async (req, res) => {
    try {
        let htmlContent = await readFile('index.html', 'utf-8');
        res.send(htmlContent);
    } catch(err) {
        console.log("errore");
        res.send(err);
    }
}); */

app.use(express.static('./'));

app.get('/', async (req, res) => {
    try {
        let htmlContent = await readFile('index.html', 'utf-8');
        res.send(htmlContent);
    } catch (err) {
        console.error("Errore nel leggere il file:", err);
        res.status(500).send("Errore interno del server");
    }
});

app.listen(PORT, '192.168.1.18', () => {
    console.log(`Server in ascolto su http://192.168.1.18:${PORT}`);
});