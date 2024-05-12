const prisma = require("../config/prisma");
const { hashPassword } = require("../utils/bcrypt");

class UsersController {
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
                    email: body.email,
                    password: await hashPassword(body.password),
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
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const body = req.body;
            const user = await prisma.user.update({
                where: { id: id },
                data: body,
            });
            return res.status(200).send(user);
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
    async getMyProfile(req, res) {
        const user = req.user;
        return res.status(200).send(user);
    }
}

module.exports = new UsersController();
