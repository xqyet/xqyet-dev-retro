const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*' }
});

let chatHistory = []; // store chat messages in memory

io.on('connection', (socket) => {
    console.log('✅ A user connected');

    // Send history to the newly connected user
    socket.emit('chat history', chatHistory);

    socket.on('chat message', (msg) => {
        chatHistory.push(msg); // Save the new message in memory
        io.emit('chat message', msg); // Broadcast to all connected users
    });

    socket.on('disconnect', () => {
        console.log('❌ User disconnected');
    });
});

server.listen(4000, () => {
    console.log('🚀 Server listening on http://localhost:4000');
});
