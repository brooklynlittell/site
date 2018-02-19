const express = require('express');
const app = express();

//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', express.static('build'));

var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running at http://localhost:%d", port));