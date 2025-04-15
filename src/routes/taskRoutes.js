const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');
const userController = require('../controllers/userController');
router.use(userController.ValidarToken)

router.get('/task', taskController.getTask);
router.get('/task/:id', taskController.getTaskById);
router.post('/task', taskController.createTask);
router.put('/task/:id', taskController.UpdateTask);
router.delete('/task/:id', taskController.DeleteTask);

module.exports = router;