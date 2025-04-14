const Sequelize = require('sequelize');

class Database {
    constructor() {
        this.db = new Sequelize(
            'bancoDoMVC',
            'root',
            '',
            { host: 'localhost', dialect: 'mysql' }
        )
    }
}

module.exports = new Database();