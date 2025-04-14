const express = require('express');

const app = express();
app.use(express.json());

const database = require('./config/database');

const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');

const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

//app.post('/login', userController.login);
app.post('/register', projectController.getProject);

/*app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/api', projectRoutes);*/

database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000')
        })
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });