const express = require('express');
const router = express.Router();

const Middleware = require('./middleware/middleware');
const Colaborador = require('./controllers/colaborador');
const Os = require('./controllers/os');
const Comentario = require('./controllers/comentario');

router.post('/login', Colaborador.login);
router.post('/colaborador', Colaborador.create);
router.get('/colaborador', Middleware.validaAcesso, Colaborador.read);
router.get('/colaborador/:matricula', Middleware.validaAcesso, Colaborador.read);
router.put('/colaborador', Middleware.validaAcesso, Colaborador.update);
router.delete('/colaborador/:matricula', Middleware.validaAcesso, Colaborador.del);

// Adicionando rotas para Os
router.post('/os', Middleware.validaAcesso, Os.createOs);
router.get('/os', Middleware.validaAcesso, Os.readOs);
router.get('/os/:id', Middleware.validaAcesso, Os.readOs);
router.put('/os', Middleware.validaAcesso, Os.updateOs);
router.delete('/os/:id', Middleware.validaAcesso, Os.deleteOs);

// Adicionando rotas para Comentario
router.post('/comentario', Comentario.createComentario);
router.get('/comentario', Comentario.readComentario);
router.get('/comentario/:id', Comentario.readComentario);
router.put('/comentario', Comentario.updateComentario);
router.delete('/comentario/:id', Comentario.deleteComentario);

router.get('/', (req, res) => { return res.json("API OSs respondendo") });

module.exports = router;
