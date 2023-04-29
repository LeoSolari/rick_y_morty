const express = require("express");
const router = require("./routes/index");
const server = express();
const PORT = 3001;

// middleware para permitir solicitudes de origen cruzado
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// middleware para parsear el cuerpo de la solicitud como JSON
server.use(express.json());

// middleware para agregar el prefijo "/rickandmorty" a todas las rutas definidas en el router
server.use("/rickandmorty", router);

// levanta el servidor
server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
