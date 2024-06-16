import TaskSchema from "../models/TaskSchema.js";

const getAllTasks = async(req, res) => {
  try {
    const tasks = await TaskSchema.find({});
    res.status(200).json({tasks})
  } catch (error) {
    res.status(404).send({"message":"sorry task could not find"})
  }
};

const createTask = async (req, res) => {
    
  const task = await TaskSchema.create(req.body);
  res.status(201).json({"task": task});
};

const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        // const id = req.params.id;
    const task = await TaskSchema.findOne({_id:id});
    if(!task){
        return res.status(404).json({"message":`sorry task could not find in ${id}`});
    }
    res.status(200).json({"task": singleTask});
    } catch (error) {
        res.status(500).json({"message":"no data found"})
    }
};

const updateTask = async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;

    const task = await TaskSchema.findOneAndUpdate({_id:id},data);

    res.status(200).json({id,task});
  } catch (error) {
    
  }
};
const deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
     const task = await TaskSchema.findOneAndDelete({_id:id});
    // const singleTask = await TaskSchema.findByIdAndDelete({_id:id});
    if(!task){
        return res.status(404).json({"message":`sorry task could not find in ${id}`});
    }
    res.status(200).json({"task": `${singleTask} is deleted`});
  } catch (error) {
    
  }
};

export { getAllTasks, createTask, deleteTask, updateTask, getTask };
