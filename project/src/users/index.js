const express = require("express");

const router = express.Router();
const { UsersController } = require('./controller');
module.exports.Usersapi = (app) => {
    router
        .get("/", UsersController.getUsers)
        .get("/:id", UsersController.getUser)
        .post("/", UsersController.createUser);
    //update
    //delete

    app.use("/api/users", router);
};