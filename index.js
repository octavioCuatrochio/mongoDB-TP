const db = require("./database");


db.init();



















// const chat = new Chat({
//     chats: [
//         new ChatRoom({
//             users: [user, user2]
//         })
//     ]
// });

// b(chat);
// chat.save(function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("funcó");
//     }
// });

// // user.save(function (err) {
// //     if (err) {
// //         throw err;
// //     } else {
// //         console.log(err);
// //     }
// // });

// const message = new Message({
//     date: new Date(),
//     content: "esto es una prueba",
//     sender: user
// });
// message.save(function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(err);
//     }
// });

//  async function a() {
//      console.log(await Message.find({}));
//  }

