const projects = []

class Project {
    constructor(id, nome, descricao) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
    }

    static insert(project) {
        projects.push(project)
        return project
    }

    static findAll() {
        return projects
    }

    static findById(id) {
        return projects.find(proj => proj.id === id)
    }

    static update(id, nome, descricao) {
        const project = this.findById(id)
        if (project) {
            project.nome = nome
            project.descricao = descricao
        }
        return project
    }

    static delete(id) {
        const index = projects.findIndex(proj => proj.id === id)
        if (index !== -1) {
            projects.splice(index, 1)
            return true
        }
        return false
    }
}

module.exports = Project