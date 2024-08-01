const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { descricao, colaborador, executor } = req.body;
        const os = await prisma.os.create({
            data: {
                descricao: descricao,
                colaborador: colaborador,
                executor: executor
            }
        });
        return res.status(201).json(os);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const read = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) { 
            const os = await prisma.os.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            if (os) {
                return res.json(os);
            } else {
                return res.status(404).json({ message: "OS não encontrada" });
            }
        } else {
            const os = await prisma.os.findMany();
            return res.json(os);
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar OS", error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const os = await prisma.os.update({
            where: {
                id: parseInt(id)
            },
            data: req.body
        });
        return res.status(202).json(os);
    } catch (error) {
        return res.status(404).json({ message: "OS não encontrada" });
    }
};

const del = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.os.delete({
            where: {
                id: parseInt(id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ message: "OS não encontrada" });
    }
};

module.exports = {
    create,
    read,
    update,
    del
};