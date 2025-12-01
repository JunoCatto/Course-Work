const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use(express.json());

// Track connected users' nicknames
const connectedUsers = new Map(); // socket.id -> nickname

function getOnlineUsernames() {
  return Array.from(connectedUsers.values());
}

io.on("connection", (socket) => {
  // Assign a default nickname
  const defaultNickname = `User-${String(
    Math.floor(Math.random() * 10000)
  ).padStart(4, "0")}`;
  connectedUsers.set(socket.id, defaultNickname);

  // Notify the newly connected user of their nickname and everyone of current online users
  socket.emit("nickname", defaultNickname);
  socket.broadcast.emit("system", `${defaultNickname} connected`);
  io.emit("online users", getOnlineUsernames());

  // Allow client to set/update nickname
  socket.on("set nickname", (newNickname) => {
    if (typeof newNickname !== "string") return;
    const trimmed = newNickname.trim().slice(0, 20);
    if (!trimmed) return;
    const oldNickname = connectedUsers.get(socket.id);
    connectedUsers.set(socket.id, trimmed);
    socket.emit("nickname", trimmed);
    if (oldNickname !== trimmed) {
      socket.broadcast.emit("system", `${oldNickname} is now ${trimmed}`);
      io.emit("online users", getOnlineUsernames());
    }
  });

  // Chat messages are broadcast to everyone EXCEPT the sender
  socket.on("chat message", (text) => {
    if (typeof text !== "string") return;
    const message = text.trim();
    if (!message) return;
    const user = connectedUsers.get(socket.id);
    socket.broadcast.emit("chat message", { user, text: message });
  });

  // Typing indicators
  socket.on("typing", () => {
    const user = connectedUsers.get(socket.id);
    socket.broadcast.emit("typing", user);
  });
  socket.on("stop typing", () => {
    const user = connectedUsers.get(socket.id);
    socket.broadcast.emit("stop typing", user);
  });

  // Handle disconnects
  socket.on("disconnect", () => {
    const user = connectedUsers.get(socket.id);
    connectedUsers.delete(socket.id);
    socket.broadcast.emit("system", `${user} disconnected`);
    io.emit("online users", getOnlineUsernames());
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
}); // index.js
