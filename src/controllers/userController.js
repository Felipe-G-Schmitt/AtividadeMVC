const User = require('../models/user')

class UserController {
    static insert(req, res) {
        const { id, nome, email, senha } = req.body;

        const user = new User(id, nome, email, senha)
        user.save()

        res.status(201).json(user)
    }

    static findAll(req, res) {
        const users = User.fetchAll()

        res.json(users)
    }

    static PutUser(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
    
        const user = User.fetchById(id); 
    
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
    
        user.id = id;
        user.nome = nome;
        user.email = email;
        user.senha = senha;
    
        user.save();
    
        res.status(200).json(user);
    }

    static DeleteUser(req, res) {
        const { id } = req.body
        const user = new User(id)
        user.delete()

        res.status(201).json(user)
    }
}

module.exports = UserController