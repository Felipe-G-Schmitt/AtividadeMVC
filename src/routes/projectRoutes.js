const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const userController = require('../controllers/userController');
router.use(userController.ValidarToken)

router.get('/project', projectController.getProject);
router.get('/project/:id', projectController.getProjectById);
router.post('/project', projectController.createProject);
router.put('/project/:id', projectController.UpdateProject);
router.delete('/project/:id', projectController.DeleteProject);

module.exports = router;