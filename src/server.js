const express = require('express')
const ProjectController = require('./controllers/projectController')
const UserController = require('./controllers/userController')
const TaskController = require('./controllers/taskController')
const app = express()

app.use(express.json())

app.post('/projects', ProjectController.insert)
app.get('/projects', ProjectController.findAll)
app.put('/projects/:id', ProjectController.update)
app.delete('/projects/:id', ProjectController.delete)

app.post('/user', UserController.insert)
app.get('/user', UserController.findAll)
app.put('/user/:id', UserController.PutUser)
app.delete('/user/:id', UserController.DeleteUser)

app.get('/tasks', TaskController.findAll)
app.post('/tasks', TaskController.insert)
app.put('/tasks/:id', TaskController.PutTask)
app.delete('/tasks/:id', TaskController.DeleteTask)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})