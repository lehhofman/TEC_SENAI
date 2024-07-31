const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
    const { matricula, pin } = req.body;
    const colaborador = await prisma.colaborador.findFirst({
        where: {
            matricula: matricula,
            pin: pin
        }
    });
    if (colaborador) {
        const token = await jwt.sign({ matricula: colaborador.matricula }, process.env.KEY, {
            //expira em uma hora ou 3600 segundos
            expiresIn: 3600
        });
        colaborador.token = token;
        return res.json(colaborador);
    } else {
        return res.status(401).json({ message: 'Matrícula ou pin inválidos' });
    }
};

const create = async (req, res) => {
    try {
        const { matricula, nome, cargo, setor, pin } = req.body;
        const colaborador = await prisma.colaborador.create({
            data: {
                matricula: matricula,
                nome: nome,
                cargo: cargo,
                setor: setor,
                pin: pin
            }
        });
        return res.status(201).json(colaborador);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const read = async (req, res) => {
    if (req.params.matricula !== undefined) {
        const colaborador = await prisma.colaborador.findUnique({
            where: {
                matricula: req.params.matricula
            }
        });
        return res.json(colaborador);
    } else {
        const colaboradores = await prisma.colaborador.findMany();
        return res.json(colaboradores);
    }
};

const update = async (req, res) => {
    try {
        const colaborador = await prisma.colaborador.update({
            where: {
                matricula: req.body.matricula
            },
            data: req.body
        });
        return res.status(202).json(colaborador);
    } catch (error) {
        return res.status(404).json({ message: "colaborador não encontrado" });
    }
};

const del = async (req, res) => {
    try {
        const colaborador = await prisma.colaborador.delete({
            where: {
                matricula: req.params.matricula
            }
        });
        return res.status(204).json(colaborador);
    } catch (error) {
        return res.status(404).json({ message: "colaborador não encontrado" });
    }
}

module.exports = {
    login,
    create,
    read,
    update,
    del
};