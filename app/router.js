const bucket = require('./aws/s3-methods');
const fs = require('fs');
module.exports = {
    router: (server) => {
        server.get('/ping', (req, res, next) => {
            res.send(200, {message: 'ping'});
        });       
        server.get('/', (req, res, next) => {
            fs.readFile(__dirname + '/pages/index.html', (err, data) => {
                if (err) throw err;
                res.setHeader("content-type", "text/html");
                res.writeHead(200);
                res.end(data);
            });
        });

        server.get('/objects', async (req, res, next) => {
            let objects = await bucket.list();
            res.send(200, {data:objects});
        });
    }
}