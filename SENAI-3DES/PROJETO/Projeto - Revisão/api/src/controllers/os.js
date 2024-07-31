const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOs = async (req, res) => {
    try {
        const { descricao, colaborador, executor, abertura, encerramento } = req.body;
        const newOs = await prisma.os.create({
            data: {
                descricao: descricao,
                colaborador: colaborador,
                executor: executor,
                abertura: abertura,
                encerramento: encerramento
            }
        });
        return res.status(201).json(newOs);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const readOs = async (req, res) => {
    if (req.params.id !== undefined) {
        const os = await prisma.os.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                comentarios: true,
                colaboradores: true,
                executores: true
            }
        });
        return res.json(os);
    } else {
        const oss = await prisma.os.findMany({
            include: {
                comentarios: true,
                colaboradores: true,
                executores: true
            }
        });
        return res.json(oss);
    }
};

const updateOs = async (req, res) => {
    try {
        const os = await prisma.os.update({
            where: {
                id: parseInt(req.body.id)
            },
            data: req.body
        });
        return res.status(202).json(os);
    } catch (error) {
        return res.status(404).json({ message: "OS não encontrada" });
    }
};

const deleteOs = async (req, res) => {
    try {
        const os = await prisma.os.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).json(os);
    } catch (error) {
        return res.status(404).json({ message: "OS não encontrada" });
    }
}

module.exports = {
    createOs,
    readOs,
    updateOs,
    deleteOs
};
