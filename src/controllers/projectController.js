const Project = require('../models/project')

class ProjectController {
    static insert(req, res) {
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
    }
}

module.exports = ProjectController