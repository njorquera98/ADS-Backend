const EstudianteModel = require('../models/estudiante');

const createEstudiante = async (estudianteBody) => {
  delete estudianteBody.id_estudiante;
  const result = await EstudianteModel.create(estudianteBody);
  return result;
};

const getEstudiantes = async () => {
  const result = await EstudianteModel.findAll();
  return result;
};

const getEstudianteById = async (id) => {
  const result = await EstudianteModel.findAll({
    where: {
      id_usuario: id
    }
  });
  return result[0];
};

const updateEstudianteById = async (id, estudianteBody) => {
  const result = await EstudianteModel.update(estudianteBody, {
    where: {
      id_usuario: id
    }
  });
  return result;
};

const deleteEstudianteById = async (id) => {
  const result = await EstudianteModel.destroy({
    where: {
      id_usuario: id
    }
  });
  return result;
};

module.exports = {
  createEstudiante,
  getEstudiantes,
  getEstudianteById,
  updateEstudianteById,
  deleteEstudianteById
};
