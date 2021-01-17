const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
const validations = require('../../../shared/formValidation');
const { genders } = require('../../../shared/diversity');

module.exports = {
  async index(request, response) {
      const cards = await connection('cards').select('*');
    
      return response.json(cards);
  },

  async create(request, response) {
    const { 
      name,
      slug,
      brand,
      category,
      limit,
      fee,
      image } = request.body;

    const id = generateUniqueId();

    let errors = []

    // if (!validations.isTextValid(name, 2, 80))
    //   errors.push('Name')

    // if (!validations.isTextValid(surname, 2, 100))
    //   errors.push('Surname')

    // if (!validations.isEmailValid(email))
    //   errors.push('Email')

    // if (!validations.isGenderValid(gender, genders))
    //   errors.push('Gender')

    // if (!validations.isDateValidNotReversed(dateOfBirth, validations.validateFullDate)) {
    //   errors.push('Date of birth')
    // }

    // if (!validations.isTextValid(comments, 0, 5000) && comments.length !== 0)
    //   errors.push('Comments')

    if (errors.length !== 0) {
      console.log(' Aborted. Found errors: ')
      errors.forEach(err => console.log(err));
      return
    }

    await connection('cards').insert({
      id,
      slug,
      name,
      brand,
      category,
      limit,
      fee,
      image
    })
    
    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const card_id = request.headers.authorization;

    const card = await connection('cards')
    .where('id', id)
    .select('id')
    .first();

    if (card.card_id !== card_id) {
      return response.status(401).json({ error: 'Operation not permitted.' })
    }

    await connection('cards').where('id', id).delete();

    return response.status(204).send();
  }
};