module.exports = {
    router: (server) => {
        server.get('/ping', (req, res, next) => {
            res.send(200, {message: 'ping'});
        });
        server.get('/', (req, res, next) => {
            res.send(200, {message: 'home'});
        });
    }
}