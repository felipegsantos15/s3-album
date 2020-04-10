const restify = require('restify');
const server = restify.createServer();
const router = require('./router');

router.router(server);

server.listen(process.env.PORT, () => {
    console.log(`server listen on port ${process.env.PORT}`);
});