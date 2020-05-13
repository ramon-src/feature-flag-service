const express = require("express");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const server = app.listen(6666, () => {
  console.log("server is running on port", server.address().port);
});

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("createEnv", (createEnv) => {});
  socket.on("createFeatureFlag", (createFeatureFlag) => {});
  socket.on("toggleFeature", (feature) => {});
  socket.on("remove", (feature) => {});
  socket.on("replicateEnviromentTo", (environment, enviroments) => {});

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
