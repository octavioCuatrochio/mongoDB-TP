const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/App", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = {
    phone: String,
    name: String
}

const ChatRoomSchema = {
    users: [UserSchema]
}

const MessageSchema = {
    date: Date,
    content: String,
    sender: UserSchema,
    chatroom: ChatRoomSchema
};


const ChatSchema = {
    chats: [ChatRoomSchema]
}

const User = mongoose.model("User", UserSchema);
const Message = mongoose.model("Message", MessageSchema);
const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);
const Chat = mongoose.model("Chat", ChatSchema);


async function init() {
    const user = new User({
        phone: "2281409190",
        name: "Octa",
    });

    const user2 = new User({
        phone: "2249123456",
        name: "Juan"
    });

    await save(user);
    await save(user2);

    const chatroom = new ChatRoom({
        users: [user, user2]
    })

    const chats = new Chat({
        chats: [chatroom]
    })

    await save(chats);

    const message = new Message({
        date: Date.now(),
        content: "asasasasas",
        sender: user,
        chatroom: chatroom
    });

    await save(message);

}


async function save(item) {
    return await item.save()._id;
}





module.exports = {
    save,
    init
};