const { estudiantesService } = require('../services');

const createEstudiante = async (req, res, next) => {
  try {
    const result = await estudiantesService.createEstudiante(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getEstudiantes = async (req, res, next) => {
  try {
    const result = await estudiantesService.getEstudiantes();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getEstudiante = async (req, res, next) => {
  try {
    const result = await estudiantesService.getEstudianteById(req.params.estudianteId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const updateEstudiante = async (req, res, next) => {
  try {
    const result = await estudiantesService.updateEstudianteById(req.params.estudianteId, req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deleteEstudiante = async (req, res, next) => {
  try {
    await estudiantesService.deleteEstudianteById(req.params.estudianteId);
    res.send(req.params.estudianteId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createEstudiante,
  getEstudiantes,
  getEstudiante,
  updateEstudiante,
  deleteEstudiante
};
