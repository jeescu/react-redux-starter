var express  = require('express');
var path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

// You can still do API calls here
app.get('/api/users', (req, res) => {
    res.send([ { id: 1 } ]);
});

// Make React Router decides from URL
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server running...');
