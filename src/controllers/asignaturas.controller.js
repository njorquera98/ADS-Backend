const AsignaturaModel = require('../models/asignatura');

const createAsignatura = async (req, res) => {
  try {
    const asignatura = await AsignaturaModel.create(req.body);
    const asignaturaSinSequelizeProps = asignatura.dataValues;
    res.json(asignaturaSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear asignatura' });
  }
};

const getAsignaturaById = async (req, res) => {
  const asignaturaId = req.params.id;

  try {
    const asignatura = await AsignaturaModel.findByPk(asignaturaId);

    if (asignatura) {
      const asignaturaSinSequelizeProps = asignatura.dataValues;
      res.json(asignaturaSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Asignatura no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener asignatura por ID' });
  }
};

const getAllAsignaturas = async (req, res) => {
  try {
    const asignaturas = await AsignaturaModel.findAll();
    const asignaturasSinSequelizeProps = asignaturas.map(
      (asignatura) => asignatura.dataValues
    );
    res.json(asignaturasSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener asignaturas' });
  }
};

const updateAsignaturaById = async (req, res) => {
  const asignaturaId = req.params.id;

  try {
    const [data, rowsUpdated] = await AsignaturaModel.update(req.body, {
      where: { id_asignatura: asignaturaId },
      returning: true,
    });

    if (rowsUpdated > 0) {
      const updatedAsignatura = await AsignaturaModel.findByPk(asignaturaId);
      const updatedAsignaturaSinSequelizeProps = updatedAsignatura.dataValues;
      res.json(updatedAsignaturaSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Asignatura no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar asignatura' });
  }
};

const deleteAsignatura = async (req, res) => {
  const asignaturaId = req.params.id;

  try {
    const rowsDeleted = await AsignaturaModel.destroy({
      where: { id_asignatura: asignaturaId },
    });

    if (rowsDeleted > 0) {
      res.json({ message: 'Asignatura eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Asignatura no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar asignatura' });
  }
};

module.exports = {
  getAllAsignaturas,
  createAsignatura,
  updateAsignaturaById,
  deleteAsignatura,
  getAsignaturaById,
};
