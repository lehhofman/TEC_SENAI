const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const { ponto, endereco, telefone, valor, destinoId } = req.body;
    try {
      const pontos = await prisma.pontosTuristico.create({
        data: {
          ponto,
          endereco,
          telefone,
          valor,
          destino: { connect: { id: destinoId } }
        }
      });
      res.status(201).json(pontos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar hotel' });
    }
  };

module.exports = {
    create,
}