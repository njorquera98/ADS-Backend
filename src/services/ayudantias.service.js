const AyudantiaModel = require('../models/ayudantia');

const createAyudantia = async (ayudantiaBody) => {
  delete ayudantiaBody.id_ayudantia;
  const result = await AyudantiaModel.create(ayudantiaBody);
  return result;
};

const getAyudantias = async () => {
  const result = await AyudantiaModel.findAll();
  return result;
};

const getAyudantiaById = async (id) => {
  const result = await AyudantiaModel.findAll({
    where: {
      id_ayudantia: id
    }
  });
  return result[0];
};

const updateAyudantiaById = async (id, ayudantiaBody) => {
  const result = await AyudantiaModel.update(ayudantiaBody, {
    where: {
      id_ayudantia: id
    }
  });
  return result;
};

const deleteAyudantiaById = async (id) => {
  const result = await AyudantiaModel.destroy({
    where: {
      id_ayudantia: id
    }
  });
  return result;
};

module.exports = {
  createAyudantia,
  getAyudantias,
  getAyudantiaById,
  updateAyudantiaById,
  deleteAyudantiaById
};
