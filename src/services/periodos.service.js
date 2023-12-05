const PeriodoModel = require('../models/periodo');

const createPeriodo = async (periodoBody) => {
  delete periodoBody.id_periodo;
  const result = await PeriodoModel.create(periodoBody);
  return result;
};

const getPeriodos = async () => {
  const result = await PeriodoModel.findAll();
  return result;
};

const getPeriodoById = async (id) => {
  const result = await PeriodoModel.findAll({
    where: {
      id_periodo: id
    }
  });
  return result[0];
};

const updatePeriodoById = async (id, periodoBody) => {
  const result = await PeriodoModel.update(periodoBody, {
    where: {
      id_periodo: id
    }
  });
  return result;
};

const deletePeriodoById = async (id) => {
  const result = await PeriodoModel.destroy({
    where: {
      id_periodo: id
    }
  });
  return result;
};

module.exports = {
  createPeriodo,
  getPeriodos,
  getPeriodoById,
  updatePeriodoById,
  deletePeriodoById
};
