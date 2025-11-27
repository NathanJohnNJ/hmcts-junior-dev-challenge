require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

const taskRouter = require("./src/routes/tasks");
const setupDatabase = require('./src/db/dbSetup').setupDatabase;
app.use(cors());
app.use(express.json());
setupDatabase();

app.use('/api/tasks', taskRouter);

try{
  app.get('/', async (req, res) => {
    res.send('Project Manager backend running'
  )});

  app.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
  });
} catch (error){
  console.error(error);
} 

