const users = []

class User {
    constructor(id, nome, email, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    static insert(user) {
        users.push(user)
        return user
    }

    static findAll() {
        return users
    }

    static findById(id) {
        return users.find(user => user.id === id)
    }

    static update(id, nome, email, senha) {
        const user = this.findById(id)
        if (user) {
            user.nome = nome
            user.email = email
            user.senha = senha
        }
        return user
    }

    static delete(id) {
        const index = users.findIndex(user => user.id === id)
        if (index !== -1) {
            users.splice(index, 1)
            return true
        }
        return false
    }
}

module.exports = User
