const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const PORT = 3000

//middleware
app.use(express.json())

// app.get('/api/v1/tasks')           - get all tasks
// app.post('/api/v1/tasks')          - create new task
// app.get('/api/v1/tasks:id')        - get single task
// app.patch('/api/v1/tasks:id')      - update task
// app.delete('/api/v1/tasks:id')     - delete task


//routes
app.get('/hello', (req, res) => {
    res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)

app.listen(PORT, console.log(`Listening on PORT ${PORT}`)
);