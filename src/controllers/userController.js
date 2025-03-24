const User = require('../models/user')

class UserController {
    static insert(req, res) {
        const { id, nome, email, senha } = req.body;

        const user = new User(id, nome, email, senha)
        User.insert(user)

        res.status(201).json(user)
    }

    static findAll(req, res) {
        const users = User.findAll()

        res.json(users)
    }

    static PutUser(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
    
        const updatedUser = User.update(Number(id), nome, email, senha);

        if (!updatedUser) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        res.status(200).json(updatedUser);
    }

    static DeleteUser(req, res) {
        const { id } = req.params;
    
        if (!User.delete(Number(id))) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        res.status(204).send();
        
    }
}

module.exports = UserController