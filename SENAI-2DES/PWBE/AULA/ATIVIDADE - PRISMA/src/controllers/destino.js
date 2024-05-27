// controllers/destino.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;
    console.log(data);
    data.valor = parseFloat(data.valor);
    data.data = new Date(data.data).toISOString();

    try {
        const destino = await prisma.destino.create({
            data
        });
        res.status(201).json(destino).end();
    } catch (error) {
        console.error("Erro ao criar destino:", error);
        res.status(500).send("Erro ao criar destino").end();
    }
}

const read = async (req, res) => {
    try {
        const destinos = await prisma.destino.findMany();
        res.status(200).json(destinos).end();
    } catch (error) {
        console.error("Erro ao ler destinos:", error);
        res.status(500).send("Erro ao ler destinos").end();
    }
    res.status(200).json(destinos).end();
}

const del = async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma.destino.delete({
            where: {
                id: id 
            }
        });
        res.status(200).json({ message: 'Destino deletado com sucesso.' }).end();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar destino.' }).end();
    }
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    try {
        const destino = await prisma.destino.update({
            where: { id },
            data,
        });
        res.status(200).json(destino).end();
    } catch (error) {
        console.error('Erro ao atualizar destino:', error);
        res.status(500).json({ error: 'Erro ao atualizar destino.' }).end();
    }
};

module.exports = {
    create,
    read,
    del,
    update,
};
