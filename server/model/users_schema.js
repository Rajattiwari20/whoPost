const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type : String,
        unique : true,
        required : true,
    },

    name : {
        type : String,
        required : true,
    },

    userName : {
        type : String,
        unique : true,
        required : true,
        min : 5,
        max : 10

    },

    password : {
        type : String,
        required : true,
        min : 8
    },

    avtar : {
        type : String,
        default : ""
    },

    coverPicture : {
        type : String,
        default : ""
    },

    followers : {
        type : Array,
        default : [],
    },

    following : {
        type : Array,
        default : [],
    },

    description : {
        type : String,
        max : 50    
    },

    relationship : {
        type : Number,
        enum : [1 , 2 , 3]
    }
   
},{
    timestamps : true
});

const User =  mongoose.model('User' , userSchema);
module.exports = User;