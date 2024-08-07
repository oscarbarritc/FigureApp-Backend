const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log('Corriendo en puerto: '+port);
});
// https://sigdeletras.com/2020/crear-una-fake-reat-api-con-json-server-copy/

