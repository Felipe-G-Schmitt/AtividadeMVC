const projects = []

class Project {
    constructor(nome, descricao) {
        this.nome = nome
        this.descricao = descricao
    }

    static insert(project) {
        projects.push(project)
    }

    static findAll() {
        return projects
    }
}

module.exports = Project