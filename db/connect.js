import mongoose from "mongoose";

export const connectionString =
  "mongodb+srv://rupamjitghosh51:36GjtAOnvzS5gF5G@cluster0.psvxubq.mongodb.net/task_manager?retryWrites=true&w=majority&appName=Cluster0";

  const mongoDB = async (url) => {
    try {
       await  mongoose.connect(connectionString )
       console.log('db is connected');
    } catch (error) {
        console.log(`${error} in db`);
    }
  }
export default mongoDB;