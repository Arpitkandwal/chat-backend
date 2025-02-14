'use strict';

module.exports = {
  bootstrap({ strapi }) {
    const { Server } = require('socket.io');

    if (!strapi.server.httpServer) {
      throw new Error('HTTP server is not available in Strapi.');
    }

    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:5173", // Match client origin
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    var socketsConnected = new Set();

    io.on("connection", (socket) => {

      socketsConnected.add(socket.id);
      console.log("A user connected:", socket.id);

      // Listen for 'sendMsg' events from the client
      socket.on("Message", (message) => {
        console.log("Message received:", message);

        // Broadcast the message to all connected clients
        io.emit("Message", message);
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
        socketsConnected.delete(socket.id);
      });
    });

    strapi.io = io;
  },
};
