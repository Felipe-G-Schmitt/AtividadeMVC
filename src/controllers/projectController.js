const Project = require('../models/project')

class ProjectController {
    async getProject(req, res) {
        const projects = await Project.findAll();
        return res.json(projects);
     }

    async getProjectById(req, res) {
        const { id } = req.params;
        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).json({ message: "Projeto não encontrado" });
        }

        res.json(project);
    }

    async createProject(req, res) {
        const { nome, descricao } = req.body;

        const project = await Project.create({ nome, descricao });

        res.status(201).json(project);
    }

    async UpdateProject(req, res) {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        const updatedProject = await Project.update({ nome, descricao }, { where: { id } });

        if (!updatedProject) {
            return res.status(404).json({ message: "Projeto não encontrado" });
        }

        res.json(updatedProject);
    }

    async DeleteProject(req, res) {
        const { id } = req.params;

        const project = await Project.findByPk(id);
        if (!project) {
            return res.status(404).json({ message: "Projeto não encontrado" });
        }

        await project.destroy();

        res.status(204).send();
    }

    /*static insert(req, res) {
        const { id, nome, descricao } = req.body

        const project = new Project(id, nome, descricao)
        Project.insert(project)

        res.status(201).json(project)
    }

    static findAll(req, res) {
        const projects = Project.findAll()

        res.json(projects)
    }

    static update(req, res) {
        const { id } = req.params
        const { nome, descricao } = req.body

        const updatedProject = Project.update(Number (id), nome, descricao)

        if (!updatedProject) {
            return res.status(404).json({ error: 'Projeto não encontrado' })
        }

        res.json(updatedProject)
    }

    static delete(req, res) {
        const { id } = req.params

        if (!Project.delete(Number (id))) {
            return res.status(404).json({ error: 'Projeto não encontrado' })
        }

        res.status(204).send()
    }*/
}

module.exports = (new ProjectController())