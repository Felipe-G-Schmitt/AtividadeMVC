const Project = require('../models/project')

class ProjectController {
    static insert(req, res) {
        const { nome, descricao } = req.body

        const project = new Project(nome, descricao)
        project.save()

        res.status(201).json(project)
    }

    static findAll(req, res) {
        const projects = Project.fetchAll()

        res.json(projects)
    }
}

module.exports = ProjectController