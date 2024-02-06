const db = require('../../data/db-config');
//const vin = require('vin-validator')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first();
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

//const create = (car) => {
  // DO YOUR MAGIC
  // const [id] = db('cars').insert(car);
  // return getById(id);

  async function create(carData) {
    const [id] = await db('cars').insert(carData, 'id');
    const newCar = await db('cars').where({ id }).first();
    return newCar;
  }


module.exports = {
  getAll,
  getById,
  create,
  getByVin,
}