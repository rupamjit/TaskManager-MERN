import express from 'express';
const app = express();
import mongoDB from './db/connect.js';
import tasks from "./routes/tasks.js"
import { connectionString } from './db/connect.js';

// middleware
app.use(express.static("./public"))
app.use(express.json());

// routes 

app.use('/api/v1/tasks',tasks);


//  app.get("/api/vi/tasks")         - get all the tasks
//  app.post("/api/vi/tasks")        - create a new tasks
//  app.get("/api/vi/tasks/:id")     - get single task
//  app.patch("/api/vi/tasks/:id")   - update a task
//  app.get("/api/vi/tasks/:id")     - delete a tak

mongoDB();
const port = 8000;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}...`)
});
