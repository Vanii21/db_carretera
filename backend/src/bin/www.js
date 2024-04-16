const app = require('../app');
const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT;
app.set('PORT', PORT);

const server = http.createServer(app);

server.listen(PORT);
server.on('listening', () => {
    console.log(`http://localhost:${PORT}`);
});