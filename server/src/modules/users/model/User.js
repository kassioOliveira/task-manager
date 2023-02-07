const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type: String,
        default:""
    },
    img:{
        type:String,
        default:""
    },
    created_at:{
        type:Date,
        default: Date.now()
    }
});

const User = mongoose.model("User",UserSchema);

module.exports = User;