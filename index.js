const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
require('dotenv').config()
const port = process.env.PORT || 8080; // you can use any port number here; i chose to use 3001

// server.use((req, res,next) => {
// res.header("Access-Control-Allow-Origin", "*");
// next();
// })

server.use(middlewares);
server.use(router);

server.listen(port,() => {
    console.log(`Server is running at ${port}`)
  });