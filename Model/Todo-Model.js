const mongoose = require('mongoose')

// model schema for todo 
const todo = new mongoose.Schema({
    todo:{
        type:String,
        required:true,
        allowNull:false
    },
    createdAt:{
        allowNull: false,
        type: Date
    }
})

module.exports = ToDo = mongoose.model('todo',todo)