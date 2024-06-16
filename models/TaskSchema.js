import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide name"],
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

const  Task = mongoose.model("Task", TaskSchema);

export default Task;