const { User, Thought, Reaction } = require("../../models");
const mongoose = require("mongoose");

const connection = require("../../config/connection");

const users = [
    {
        username: "dawsofd",
        email: "d.dohlen@pm.me",
        thought: [],
    },
];

console.log(connection);

connection.once("open", async () => {
    console.log("connected");

    await User.deleteMany({});

    await User.collection.insertMany(users);

    console.table(users);
    console.info("Seeding data successful!");
    process.exit(0);
});