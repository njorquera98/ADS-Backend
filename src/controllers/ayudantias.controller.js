const AyudantiaModel = require('../models/ayudantia');
const AsignaturaModel = require('../models/asignatura');
const UsuarioModel = require('../models/usuario');
const PeriodoModel = require('../models/periodo');

const createAyudantia = async (req, res) => {
  try {
    // Verificar que el ID de la asignatura existe
    const asignaturaId = req.body.id_asignatura;
    const asignaturaExist = await AsignaturaModel.findByPk(asignaturaId);
    if (!asignaturaExist) {
      return res.status(400).json({ error: 'La asignatura no existe' });
    }

    // Verificar que el ID del usuario existe
    const usuarioId = req.body.id_usuario;
    const usuarioExist = await UsuarioModel.findByPk(usuarioId);
    if (!usuarioExist) {
      return res.status(400).json({ error: 'El usuario no existe' });
    }

    // Verificar que el ID del periodo existe
    const periodoId = req.body.id_periodo;
    const periodoExist = await PeriodoModel.findByPk(periodoId);
    if (!periodoExist) {
      return res.status(400).json({ error: 'El periodo no existe' });
    }

    const ayudantia = await AyudantiaModel.create(req.body);
    const ayudantiaSinSequelizeProps = ayudantia.dataValues;
    res.json(ayudantiaSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear ayudantía' });
  }
};

const updateAyudantiaById = async (req, res) => {
  const ayudantiaId = req.params.id;

  try {
    // Verificar que el ID de la asignatura existe
    if (req.body.id_asignatura) {
      const asignaturaId = req.body.id_asignatura;
      const asignaturaExist = await AsignaturaModel.findByPk(asignaturaId);
      if (!asignaturaExist) {
        return res.status(400).json({ error: 'La asignatura no existe' });
      }
    }

    // Verificar que el ID del usuario existe
    if (req.body.id_usuario) {
      const usuarioId = req.body.id_usuario;
      const usuarioExist = await UsuarioModel.findByPk(usuarioId);
      if (!usuarioExist) {
        return res.status(400).json({ error: 'El usuario no existe' });
      }
    }

    // Verificar que el ID del periodo existe
    if (req.body.id_periodo) {
      const periodoId = req.body.id_periodo;
      const periodoExist = await PeriodoModel.findByPk(periodoId);
      if (!periodoExist) {
        return res.status(400).json({ error: 'El periodo no existe' });
      }
    }

    const [data, rowsUpdated] = await AyudantiaModel.update(req.body, {
      where: { id_ayudantia: ayudantiaId },
      returning: true,
    });

    if (rowsUpdated > 0) {
      const updatedAyudantia = await AyudantiaModel.findByPk(ayudantiaId);
      const updatedAyudantiaSinSequelizeProps = updatedAyudantia.dataValues;
      res.json(updatedAyudantiaSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Ayudantía no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar ayudantía' });
  }
};

const getAyudantiaById = async (req, res) => {
  const ayudantiaId = req.params.id;

  try {
    const ayudantia = await AyudantiaModel.findByPk(ayudantiaId);

    if (ayudantia) {
      const ayudantiaSinSequelizeProps = ayudantia.dataValues;
      res.json(ayudantiaSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Ayudantía no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener ayudantía por ID' });
  }
};

const getAllAyudantias = async (req, res) => {
  try {
    const ayudantias = await AyudantiaModel.findAll();
    const ayudantiasSinSequelizeProps = ayudantias.map(
      (ayudantia) => ayudantia.dataValues
    );
    res.json(ayudantiasSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener ayudantías' });
  }
};

const deleteAyudantia = async (req, res) => {
  const ayudantiaId = req.params.id;

  try {
    const rowsDeleted = await AyudantiaModel.destroy({
      where: { id_ayudantia: ayudantiaId },
    });

    if (rowsDeleted > 0) {
      res.json({ message: 'Ayudantía eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Ayudantía no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar ayudantía' });
  }
};

module.exports = {
  getAllAyudantias,
  createAyudantia,
  updateAyudantiaById,
  deleteAyudantia,
  getAyudantiaById,
};
