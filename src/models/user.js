const users = []

class User {
    constructor(id, nome, email, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    save() {
        users.push(this)
    }

    static fetchAll() {
        return users
    }

    static fetchById(id) {
        return users.find(user => user.id == id)
    }
}

module.exports = User