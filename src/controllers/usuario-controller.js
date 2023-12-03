const UsuarioModel = require('../models/usuario');

const createUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioModel.create(req.body);
    const usuarioSinSequelizeProps = usuario.dataValues;
    res.json(usuarioSinSequelizeProps);
    // console.log('Usuario creado:', usuarioSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const getUsuarioById = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await UsuarioModel.findByPk(usuarioId);

    if (usuario) {
      const usuarioSinSequelizeProps = usuario.dataValues;
      res.json(usuarioSinSequelizeProps);
      // console.log('Usuario obtenido por ID:', usuarioSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuario por ID' });
  }
};

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.findAll();
    const usuariosSinSequelizeProps = usuarios.map(
      (usuario) => usuario.dataValues
    );
    res.json(usuariosSinSequelizeProps);
    // console.log('Usuarios obtenidos:', usuariosSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

const updateUsuarioById = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const [data, rowsUpdated] = await UsuarioModel.update(req.body, {
      where: { id_usuario: usuarioId },
      returning: true,
    });

    if (rowsUpdated > 0) {
      // Ahora solo se espera un valor, así que no hay necesidad de [updatedUsuario]
      const updatedUsuario = await UsuarioModel.findByPk(usuarioId);
      const updatedUsuarioSinSequelizeProps = updatedUsuario.dataValues;
      res.json(updatedUsuarioSinSequelizeProps);
      // console.log('Usuario actualizado:', updatedUsuarioSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

const deleteUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const rowsDeleted = await UsuarioModel.destroy({
      where: { id_usuario: usuarioId },
    });

    if (rowsDeleted > 0) {
      res.json({ message: 'Usuario eliminado correctamente' });
      // console.log('Usuario eliminado:', usuarioId);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  updateUsuarioById,
  deleteUsuario,
  getUsuarioById,
};
