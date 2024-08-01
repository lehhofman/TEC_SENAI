const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const comment = await prisma.comentario.create({
            data: req.body
        });
        return res.status(201).json(comment);
    } catch (error) {
        return res.status(400).json({ message: "Erro ao criar comentário" });
    }
}

const read = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const comentario = await prisma.comentario.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if (!comentario) {
                return res.status(404).json({ message: "Comentário não encontrado" });
            }

            return res.json(comentario);
        } else {
            const comentarios = await prisma.comentario.findMany();

            return res.json(comentarios);
        }
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar comentários" });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const comentarioAtualizado = await prisma.comentario.update({
            where: {
                id: parseInt(id)
            },
            data: req.body
        });
        return res.status(202).json(comentarioAtualizado);
    } catch (error) {
        return res.status(404).json({ message: "Comentário não encontrado" });
    }
};

const del = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.comentario.delete({
            where: {
                id: parseInt(id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ message: "Comentário não encontrado" });
    }
};

module.exports = {
    create,
    read,
    update,
    del
};