const AsignaturaModel = require('../models/asignatura');

const createAsignatura = async (asignaturaBody) => {
  delete asignaturaBody.id_asignatura;
  const result = await AsignaturaModel.create(asignaturaBody);
  return result;
};

const getAsignaturas = async () => {
  const result = await AsignaturaModel.findAll();
  return result;
};

const getAsignaturaById = async (id) => {
  const result = await AsignaturaModel.findAll({
    where: {
      id_asignatura: id
    }
  });
  return result[0];
};

const updateAsignaturaById = async (id, asignaturaBody) => {
  const result = await AsignaturaModel.update(asignaturaBody, {
    where: {
      id_asignatura: id
    }
  });
  return result;
};

const deleteAsignaturaById = async (id) => {
  const result = await AsignaturaModel.destroy({
    where: {
      id_asignatura: id
    }
  });
  return result;
};

module.exports = {
  createAsignatura,
  getAsignaturas,
  getAsignaturaById,
  updateAsignaturaById,
  deleteAsignaturaById
};
