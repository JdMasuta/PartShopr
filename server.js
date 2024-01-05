const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;
var cors = require('cors');
app.use(cors());

//app.use(express.text()); // For parsing text/plain request body

// Endpoint to get the XML file content
app.get('/load-xml', (req, res) => {
    fs.readFile('/resources/parts.xml', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading the file');
            return;
        }
        res.type('application/xml').send(data);
    });
});

// Endpoint to save the XML file content
app.post('/save-xml', (req, res) => {
    fs.writeFile('/resources/parts.xml', req.body, 'utf8', (err) => {
        if (err) {
            res.status(500).send('Error writing to the file');
            return;
        }
        res.send('File saved successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
