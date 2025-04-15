const Task = require('../models/task')

class TaskController {
    async getTask(req, res) {
        const tasks = await Task.findAll();
        return res.json(tasks);
    }

    async getTaskById(req, res) {
        const { id } = req.params;
        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        res.json(task);
    }

    async createTask(req, res) {
        const { titulo, status, idProject, idUser } = req.body;

        const task = await Task.create({ titulo, status, idProject, idUser });

        res.status(201).json(task);
    }

    async UpdateTask(req, res) {
        const { id } = req.params;
        const { titulo, status, idProject, idUser } = req.body;

        const updatedTask = await Task.update({ titulo, status, idProject, idUser }, { where: { id } });

        if (!updatedTask) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        res.json(updatedTask);
    }

    async DeleteTask(req, res) {
        const { id } = req.params;

        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        await task.destroy();

        res.status(204).send();
    }
    /*static insert(req, res) {
        const { id, titulo, status, idProject, idUser } = req.body;

        const task = new Task(id, titulo, status, idProject, idUser);
        Task.insert(task);

        res.status(201).json(task);
    }

    static findAll(req, res) {
        const tasks = Task.findAll();
        res.json(tasks);
    }

    static PutTask(req, res) {
        const { id } = req.params;
        const { titulo, status, idProject, idUser } = req.body;

        const updatedTask = Task.update(Number(id), titulo, status, idProject, idUser);

        if (!updatedTask) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        res.status(200).json(updatedTask);
    }

    static DeleteTask(req, res) {
        const { id } = req.params;

        if (!Task.delete(Number(id))) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }

        res.status(204).send();
    }

    static findByProjectId(req, res) {
        const { idProject } = req.params;
        const tasks = Task.findByProjectId(Number(idProject));

        res.status(200).json(tasks);
    }

    static findByUserId(req, res) {
        const { idUser } = req.params;
        const tasks = Task.findByUserId(Number(idUser));

        res.status(200).json(tasks);
    }*/
}

module.exports = (new TaskController());