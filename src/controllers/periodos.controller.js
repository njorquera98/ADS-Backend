const { periodosService } = require('../services');

const createPeriodo = async (req, res, next) => {
  try {
    const result = await periodosService.createPeriodo(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getPeriodos = async (req, res, next) => {
  try {
    const result = await periodosService.getPeriodos();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getPeriodo = async (req, res, next) => {
  try {
    const result = await periodosService.getPeriodoById(req.params.periodoId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const updatePeriodo = async (req, res, next) => {
  try {
    const result = await periodosService.updatePeriodoById(req.params.periodoId, req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deletePeriodo = async (req, res, next) => {
  try {
    await periodosService.deletePeriodoById(req.params.periodoId);
    res.send(req.params.periodoId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPeriodo,
  getPeriodos,
  getPeriodo,
  updatePeriodo,
  deletePeriodo
};
