// routes.js
const express = require('express');
const router = express.Router();

const destinosController = require('./controllers/destino');
const hoteisController = require('./controllers/hoteis');
const pontosController = require('./controllers/pontos');

router.get('/', (req, res) => {
    res.send('Hello World').end();
});

router.post('/destino', destinosController.create);
router.get('/destinos', destinosController.read);
router.delete('/destino/:id', destinosController.del);
router.put('/destino/:id', destinosController.update);

router.post('/hotel', hoteisController.create);
router.get('/hotel', hoteisController.get);
router.get('/hotel/:id', hoteisController.getHotel);
router.put('/hotel/:id', hoteisController.update);
router.delete('/hotel/:id', hoteisController.del);

router.post('/pontos', pontosController.create);

module.exports = router;
