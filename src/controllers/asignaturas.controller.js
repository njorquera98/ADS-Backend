const { asignaturasService } = require('../services');

const createAsignatura = async (req, res, next) => {
  try {
    const result = await asignaturasService.createAsignatura(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getAsignaturas = async (req, res, next) => {
  try {
    const result = await asignaturasService.getAsignaturas();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getAsignatura = async (req, res, next) => {
  try {
    const result = await asignaturasService.getAsignaturaById(req.params.asignaturaId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const updateAsignatura = async (req, res, next) => {
  try {
    const result = await asignaturasService.updateAsignaturaById(req.params.asignaturaId, req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deleteAsignatura = async (req, res, next) => {
  try {
    await asignaturasService.deleteAsignaturaById(req.params.asignaturaId);
    res.send(req.params.asignaturaId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createAsignatura,
  getAsignaturas,
  getAsignatura,
  updateAsignatura,
  deleteAsignatura
};
