const mongoose = require('mongoose')

var state = {
    db: null,
};

//MongoAtlas cluster id
const URI = 'mongodb+srv://admin:admin@cluster0.cwwb7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Connecting to the cluster of mongoAtlas
const connectDb = async() =>{
    await mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true}, function (err, db) {
            if (err) 
            return console.log(err)
            state.db = db
            console.log('Database Connected......');
    })
}

module.exports = connectDb;