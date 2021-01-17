const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const CardController = require('./controllers/CardController');

const routes = express.Router();

routes.get('/cards', CardController.index);

routes.post('/cards', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(2).max(80),
    slug: Joi.string().required().min(3).max(80),
    brand: Joi.string().required().min(3).max(10),
    category: Joi.string().required().min(4).max(10),
    limit: Joi.string(),
    fee: Joi.string(),
    image: Joi.string().required(),
  })
}), CardController.create);

routes.delete('/cards/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required(),
  })
}), CardController.delete);


module.exports = routes;
