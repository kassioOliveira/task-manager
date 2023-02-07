const mongoose = require("mongoose");
const {Schema} = mongoose;

const ListSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
   
});

const List = mongoose.model("List",ListSchema);

module.exports = List;