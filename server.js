const express = require('express')
const path = require('path')

//import express and assigned to variable
const app = require('express')();

app.use('/', express.static(path.join(__dirname, '/public')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))

//heroku
const PORT= process.env.PORT || 3000;

//import socket.io,which will run on port 3000 and assigned to variable
const http = require('http').createServer(app)

const io = require('socket.io')(http);

const users={}

//const {channelConversations} = require("./public/js/models/channelConversations.js");
const messages= [];

// acts as a listner when connected
io.on('connection', socket => {
    // socket.on receives the message from client
    socket.on('new-user', name =>{
        // Store the user name  with socketID as key
        users[socket.id]=name
        //console.log(users);
        // send to every client
        socket.broadcast.emit('user-connected', name)

        // send all the messeages
        for(const message of messages){
            socket.emit('chat-message', message);
        }
    })
    // catch a chat message
    socket.on('send-chat-message', msg =>{
        const obj = JSON.parse(msg);
        const messageText = obj.message;
        const time = obj.time;
        
        const messageObj = {
            message: messageText, name: users[socket.id], time: time
        }
        //console.log(messageObj);
        // store messages in an array
        messages.push(messageObj);
        socket.broadcast.emit('chat-message', messageObj);
    })
    socket.on('disconneted', () =>{
        socket.broadcast.emit('user-disconneted', users[socket.id])
        delete users[socket.id]
    })
})
//app object will get request and will give response 
app.get("/", (req, res) => {
    res.send("Server is up");
    console.log("server is up");
})

http.listen(PORT, function(){
    console.log(`Chat server running on port ${PORT}`);
})


//Create our web server
//Port number
// app.listen(3001, () =>{
//     console.log("server is running");
// });

