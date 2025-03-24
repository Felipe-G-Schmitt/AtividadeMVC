const tasks = []

class TaskController {
    constructor(id, titulo, status, idProject, idUser) {
        this.id = id
        this.titulo = titulo
        this.status = status
        this.idProject = idProject
        this.idUser = idUser
    }

    static insert(task) {
        tasks.push(task)
        return task
    }

    static findAll() {
        return tasks
    }

    static findById(id) {
        return tasks.find(task => task.id === id)
    }

    static update(id, titulo, status, idProject, idUser) {
        const task = this.findById(id)
        if (task) {
            task.titulo = titulo
            task.status = status
            task.idProject = idProject
            task.idUser = idUser
        }
        return task
    }

    static delete(id) {
        const index = tasks.findIndex(task => task.id === id)
        if (index !== -1) {
            tasks.splice(index, 1)
            return true
        }
        return false
    }
}

module.exports = TaskController