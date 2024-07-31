const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controlador para login
const login = async (req, res) => {
    const { matricula, pin } = req.body;
    const colaborador = await prisma.colaborador.findFirst({
        where: {
            matricula: matricula,
            pin: pin
        }
    });
    if (colaborador) {
        // Apenas retorna os detalhes do colaborador sem gerar token
        return res.json(colaborador);
    } else {
        return res.status(401).json({ message: 'Matrícula ou pin inválidos' });
    }
};

// Controlador para criar comentário
const createComentario = async (req, res) => {
    try {
        const { os, colaborador, data, comentario } = req.body;
        const newComentario = await prisma.comentario.create({
            data: {
                os: os,
                colaborador: colaborador,
                data: new Date(data), // Assegure-se de que a data esteja em formato ISO
                comentario: comentario
            }
        });
        return res.status(201).json(newComentario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Controlador para ler comentário(s)
const readComentario = async (req, res) => {
    if (req.params.id !== undefined) {
        const comentario = await prisma.comentario.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(comentario);
    } else {
        const comentarios = await prisma.comentario.findMany();
        return res.json(comentarios);
    }
};

// Controlador para atualizar comentário
const updateComentario = async (req, res) => {
    try {
        const comentario = await prisma.comentario.update({
            where: {
                id: parseInt(req.body.id)
            },
            data: req.body
        });
        return res.status(202).json(comentario);
    } catch (error) {
        return res.status(404).json({ message: "Comentário não encontrado" });
    }
};

// Controlador para deletar comentário
const deleteComentario = async (req, res) => {
    try {
        const comentario = await prisma.comentario.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).json({});
    } catch (error) {
        return res.status(404).json({ message: "Comentário não encontrado" });
    }
};

module.exports = {
    login,
    createComentario,
    readComentario,
    updateComentario,
    deleteComentario
};
