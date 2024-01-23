const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/user'); // Adjust the path based on your project structure

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ayeshaashraf0091:qwertyuio@cluster0.m0fngbg.mongodb.net/mern_admin?retryWrites=true&w=majority");

app.get('/getUsers', (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

const port = 3000;
app.listen(port, () => {
    console.log("Port is running at port 3000");
});
