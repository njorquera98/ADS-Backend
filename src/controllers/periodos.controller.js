const PeriodoModel = require('../models/periodo');

const createPeriodo = async (req, res) => {
  try {
    const periodo = await PeriodoModel.create(req.body);
    const periodoSinSequelizeProps = periodo.dataValues;
    res.json(periodoSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear periodo' });
  }
};

const getPeriodoById = async (req, res) => {
  const periodoId = req.params.id;

  try {
    const periodo = await PeriodoModel.findByPk(periodoId);

    if (periodo) {
      const periodoSinSequelizeProps = periodo.dataValues;
      res.json(periodoSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Periodo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener periodo por ID' });
  }
};

const getAllPeriodos = async (req, res) => {
  try {
    const periodos = await PeriodoModel.findAll();
    const periodosSinSequelizeProps = periodos.map(
      (periodo) => periodo.dataValues
    );
    res.json(periodosSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener periodos' });
  }
};

const updatePeriodoById = async (req, res) => {
  const periodoId = req.params.id;

  try {
    const [data, rowsUpdated] = await PeriodoModel.update(req.body, {
      where: { id_periodo: periodoId },
      returning: true,
    });

    if (rowsUpdated > 0) {
      const updatedPeriodo = await PeriodoModel.findByPk(periodoId);
      const updatedPeriodoSinSequelizeProps = updatedPeriodo.dataValues;
      res.json(updatedPeriodoSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Periodo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar periodo' });
  }
};

const deletePeriodo = async (req, res) => {
  const periodoId = req.params.id;

  try {
    const rowsDeleted = await PeriodoModel.destroy({
      where: { id_periodo: periodoId },
    });

    if (rowsDeleted > 0) {
      res.json({ message: 'Periodo eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Periodo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar periodo' });
  }
};

module.exports = {
  getAllPeriodos,
  createPeriodo,
  updatePeriodoById,
  deletePeriodo,
  getPeriodoById,
};
