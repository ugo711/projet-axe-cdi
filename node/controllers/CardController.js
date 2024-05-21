const prisma = require("../config/prisma");
class CardController {
    async index(req, res) {
        const users = await prisma.user.findMany();
        return res.status(200).send(users);
    }
    async store(req, res) {
        try {
            const body = req.body;
            const user = await prisma.user.create({
                data: {
                    name: body.name,
                    house: body.house,
                },
            });
            return res.status(200).send(user);
        } catch (e) {
            return res.status(500).send({
                message: e.message,
            });
        }
    }
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const user = await prisma.user.findUnique({
                where: {
                    id: id,
                },
            });
            return res.status(201).send(user);
        } catch (e) {
            return res.status(500).send({
                message: e.message,
            });
        }
    }
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            await prisma.user.delete({
                where: { id: id },
            });
            return res.status(204).send();
        } catch (e) {
            return res.status(500).send({
                message: e.message,
            });
        }
    }
}

module.exports = new CardController();
