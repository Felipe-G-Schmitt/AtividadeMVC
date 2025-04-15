const express = require('express');

const app = express();
app.use(express.json());

const database = require('./config/database');

const userController = require('./controllers/userController');

const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.post('/register', userController.createUser);
app.post('/login', userController.login);

app.use('/rota', userRoutes);
app.use('/rota', taskRoutes);
app.use('/rota', projectRoutes);

database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000')
        })
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });