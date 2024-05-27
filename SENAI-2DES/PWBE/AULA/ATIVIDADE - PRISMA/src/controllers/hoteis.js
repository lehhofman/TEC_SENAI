const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  const { hotel, valor, avaliacao, email, site, destinoId } = req.body;
  try {
    const newHotel = await prisma.hotel.create({
      data: {
        hotel,
        valor,
        avaliacao,
        email,
        site,
        destino: { connect: { id: destinoId } }
      }
    });
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar hotel' });
  }
};

const get = async (req, res) => {
  try {
    const hotels = await prisma.hotel.findMany();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter hotéis' });
  }
};

const getHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await prisma.hotel.findUnique({
      where: { id: parseInt(id) }
    });
    if (!hotel) {
      res.status(404).json({ message: 'Hotel não encontrado' });
      return;
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter hotel' });
  }
};

const update = async (req, res) => {
        const id = Number(req.params.id);
        const data = req.body;
    
        try {
            const hotel = await prisma.hotel.update({
                where: { id },
                data,
            });
            res.status(200).json(hotel).end();
        } catch (error) {
            console.error('Erro ao atualizar hotel:', error);
            res.status(500).json({ error: 'Erro ao atualizar hotel.' }).end();
        }
};

const del = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.hotel.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: 'hotel deletado com sucesso.' }).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir hotel' });
  }
};

module.exports = {
  create,
  get,
  getHotel,
  update,
  del,
};
