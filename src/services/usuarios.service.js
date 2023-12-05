const UsuarioModel = require('../models/usuario');

const createUsuario = async (usuarioBody) => {
  delete usuarioBody.id_usuario;
  const result = await UsuarioModel.create(usuarioBody);
  return result;
};

const getUsuarios = async () => {
  const result = await UsuarioModel.findAll();
  return result;
};

const getUsuarioById = async (id) => {
  const result = await UsuarioModel.findAll({
    where: {
      id_usuario: id
    }
  });
  return result[0];
};

const updateUsuarioById = async (id, usuarioBody) => {
  const result = await UsuarioModel.update(usuarioBody, {
    where: {
      id_usuario: id
    }
  });
  return result;
};

const deleteUsuarioById = async (id) => {
  const result = await UsuarioModel.destroy({
    where: {
      id_usuario: id
    }
  });
  return result;
};

module.exports = {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuarioById,
  deleteUsuarioById
};
