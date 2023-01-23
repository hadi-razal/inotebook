const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


const mongoURI = "mongodb+srv://hadi1:8Trq3i3gZV7z6Vez@cluster0.qtcywvc.mongodb.net/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;