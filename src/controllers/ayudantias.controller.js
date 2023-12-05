const { ayudantiasService } = require('../services');

const createAyudantia = async (req, res, next) => {
  try {
    const result = await ayudantiasService.createAyudantia(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getAyudantias = async (req, res, next) => {
  try {
    const result = await ayudantiasService.getAyudantias();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getAyudantia = async (req, res, next) => {
  try {
    const result = await ayudantiasService.getAyudantiaById(req.params.ayudantiaId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const updateAyudantia = async (req, res, next) => {
  try {
    const result = await ayudantiasService.updateAyudantiaById(req.params.ayudantiaId, req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deleteAyudantia = async (req, res, next) => {
  try {
    await ayudantiasService.deleteAyudantiaById(req.params.ayudantiaId);
    res.send(req.params.ayudantiaId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createAyudantia,
  getAyudantias,
  getAyudantia,
  updateAyudantia,
  deleteAyudantia
};
