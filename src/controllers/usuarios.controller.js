const { usuariosService } = require('../services');

const createUsuario = async (req, res, next) => {
  try {
    const result = await usuariosService.createUsuario(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getUsuarios = async (req, res, next) => {
  try {
    const result = await usuariosService.getUsuarios();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getUsuario = async (req, res, next) => {
  try {
    const result = await usuariosService.getUsuarioById(req.params.usuarioId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const updateUsuario = async (req, res, next) => {
  try {
    const result = await usuariosService.updateUsuarioById(req.params.usuarioId, req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deleteUsuario = async (req, res, next) => {
  try {
    await usuariosService.deleteUsuarioById(req.params.usuarioId);
    res.send(req.params.usuarioId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUsuario,
  getUsuarios,
  getUsuario,
  updateUsuario,
  deleteUsuario
};
