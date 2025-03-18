const express = require('express')
const ProjectController = require('./controllers/projectController')
//const TaskController = require('./controllers/taskController')
const UserController = require('./controllers/userController')
const app = express()

app.use(express.json())

app.post('/projects', ProjectController.insert)
app.get('/projects', ProjectController.findAll)

app.post('/user', UserController.insert)
app.get('/user', UserController.findAll)
app.put('/user/id', UserController.PutUser)
app.delete('/user/id', UserController.DeleteUser)

//app.post('/tasks', TaskController.insert)
//app.get('/tasks', TaskController.findAll)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})