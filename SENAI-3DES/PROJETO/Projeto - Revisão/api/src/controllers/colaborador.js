const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
    const { matricula, pin } = req.body;
    try {
        const colaborador = await prisma.colaborador.findFirst({
            where: {
                matricula: matricula,
                pin: pin
            }
        });
        if (colaborador) {
            const token = jwt.sign({ matricula: colaborador.matricula }, process.env.KEY, {
                expiresIn: 3600
            });
            colaborador.token = token;
            return res.json(colaborador);
        } else {
            return res.status(401).json({ message: 'Matrícula ou pin inválidos' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao processar a solicitação', error: error.message });
    }
};

const read = async (req, res) => {
    try {
        if (req.params.matricula) {
            const colaborador = await prisma.colaborador.findUnique({
                where: {
                    matricula: req.params.matricula
                }
            });
            if (colaborador) {
                return res.json(colaborador);
            } else {
                return res.status(404).json({ message: 'Colaborador não encontrado' });
            }
        } else {
            const colaboradores = await prisma.colaborador.findMany();
            return res.json(colaboradores);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao processar a solicitação', error: error.message });
    }
};

const create = async (req, res) => {
    const { matricula, pin, nome, cargo, setor } = req.body;
    try {
        const novoColaborador = await prisma.colaborador.create({
            data: {
                matricula: matricula,
                pin: pin,
                nome: nome,
                cargo: cargo,
                setor: setor
            }
        });
        return res.status(201).json(novoColaborador);
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao criar colaborador', error: error.message });
    }
};

module.exports = {
    login,
    read,
    create
};
