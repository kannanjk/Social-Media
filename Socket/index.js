const io = require('socket.io')(8800, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let activeUsers = []

io.on("connection", (socket) => {
    // Add New User  
    socket.on("new-user-add", (newUserId) => {
        // if user is not added previously
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({ userId: newUserId, socketId: socket.id })
            console.log("Connected User", activeUsers);
        }
        // send all active users to new user
        io.emit("get-users", activeUsers)
    })
    // Remove user from active users 
    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        console.log("disconnected User", activeUsers);
        // send all active users to all users
        io.emit("get-users", activeUsers)
    }) 

    // Sent Message to a specific user
    socket.on("send-message", (data) => {
        const { receiverId } = data
        const user = activeUsers.find((user) => user.userId === receiverId)
        if (user) {
            io.to(user.socketId).emit("receive-message", data)
        }
    })
})