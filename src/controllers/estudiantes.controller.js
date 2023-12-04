const EstudianteModel = require('../models/estudiante');
const UsuarioModel = require('../models/usuario');

const createEstudiante = async (req, res) => {
  try {
    // Comprobar si el usuario existe
    const usuarioId = req.body.id_usuario;
    const usuarioExistente = await UsuarioModel.findByPk(usuarioId);

    if (!usuarioExistente) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const estudiante = await EstudianteModel.create(req.body);
    const estudianteSinSequelizeProps = estudiante.dataValues;
    res.json(estudianteSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear estudiante' });
  }
};

const updateEstudianteById = async (req, res) => {
  const estudianteId = req.params.id;

  try {
    // Comprobar si el usuario existe antes de actualizar el estudiante
    const usuarioId = req.body.id_usuario;
    const usuarioExistente = await UsuarioModel.findByPk(usuarioId);

    if (!usuarioExistente) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const [data, rowsUpdated] = await EstudianteModel.update(req.body, {
      where: { id_estudiante: estudianteId },
      returning: true,
    });

    if (rowsUpdated > 0) {
      const updatedEstudiante = await EstudianteModel.findByPk(estudianteId);
      const updatedEstudianteSinSequelizeProps = updatedEstudiante.dataValues;
      res.json(updatedEstudianteSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar estudiante' });
  }
};

const getEstudianteById = async (req, res) => {
  const estudianteId = req.params.id;

  try {
    const estudiante = await EstudianteModel.findByPk(estudianteId);

    if (estudiante) {
      const estudianteSinSequelizeProps = estudiante.dataValues;
      res.json(estudianteSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener estudiante por ID' });
  }
};

const getAllEstudiantes = async (req, res) => {
  try {
    const estudiantes = await EstudianteModel.findAll();
    const estudiantesSinSequelizeProps = estudiantes.map(
      (estudiante) => estudiante.dataValues
    );
    res.json(estudiantesSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
};

const deleteEstudiante = async (req, res) => {
  const estudianteId = req.params.id;

  try {
    const rowsDeleted = await EstudianteModel.destroy({
      where: { id_estudiante: estudianteId },
    });

    if (rowsDeleted > 0) {
      res.json({ message: 'Estudiante eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar estudiante' });
  }
};

module.exports = {
  getAllEstudiantes,
  createEstudiante,
  updateEstudianteById,
  deleteEstudiante,
  getEstudianteById,
};
