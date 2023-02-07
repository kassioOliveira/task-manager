const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        default: ""
    },
    important:{
        type:Boolean,
        default:false
    },
    completed:{
        type:Boolean,
        default:false
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    list_id:{
        type:String,
        default:""
    },
    my_day:{
        type:Boolean,
        default:false
    },
    created_at:{
        type:Date,
        default: Date.now()
    }
}

);

const Task = mongoose.model("Task",TaskSchema);

module.exports = Task;