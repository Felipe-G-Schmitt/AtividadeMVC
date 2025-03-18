const tasks = []

class Task {
    constructor(id, titulo, status) {
        this.id = id
        this.titulo = titulo
        this.status = status
    }

    static insert(task) {
        tasks.push(task)
    }

    static findAll() {
        return tasks
    }
}