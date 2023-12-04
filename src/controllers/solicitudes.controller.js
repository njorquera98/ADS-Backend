const SolicitudModel = require('../models/solicitud');
const AyudantiaModel = require('../models/ayudantia');
const UsuarioModel = require('../models/usuario');
const PeriodoModel = require('../models/periodo');

const createSolicitud = async (req, res) => {
  try {
    // Verificar que el ID de la ayudantía existe
    const ayudantiaId = req.body.id_ayudantia;
    const ayudantiaExist = await AyudantiaModel.findByPk(ayudantiaId);
    if (!ayudantiaExist) {
      return res.status(400).json({ error: 'La ayudantía no existe' });
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

    const solicitud = await SolicitudModel.create(req.body);
    const solicitudSinSequelizeProps = solicitud.dataValues;
    res.json(solicitudSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear solicitud' });
  }
};

const updateSolicitudById = async (req, res) => {
  const solicitudId = req.params.id;

  try {
    // Verificar que el ID de la ayudantía existe
    if (req.body.id_ayudantia) {
      const ayudantiaId = req.body.id_ayudantia;
      const ayudantiaExist = await AyudantiaModel.findByPk(ayudantiaId);
      if (!ayudantiaExist) {
        return res.status(400).json({ error: 'La ayudantía no existe' });
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

    const [data, rowsUpdated] = await SolicitudModel.update(req.body, {
      where: { id_solicitud: solicitudId },
      returning: true,
    });

    if (rowsUpdated > 0) {
      const updatedSolicitud = await SolicitudModel.findByPk(solicitudId);
      const updatedSolicitudSinSequelizeProps = updatedSolicitud.dataValues;
      res.json(updatedSolicitudSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Solicitud no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar solicitud' });
  }
};

const getSolicitudById = async (req, res) => {
  const solicitudId = req.params.id;

  try {
    const solicitud = await SolicitudModel.findByPk(solicitudId);

    if (solicitud) {
      const solicitudSinSequelizeProps = solicitud.dataValues;
      res.json(solicitudSinSequelizeProps);
    } else {
      res.status(404).json({ error: 'Solicitud no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener solicitud por ID' });
  }
};

const getAllSolicitudes = async (req, res) => {
  try {
    const solicitudes = await SolicitudModel.findAll();
    const solicitudesSinSequelizeProps = solicitudes.map(
      (solicitud) => solicitud.dataValues
    );
    res.json(solicitudesSinSequelizeProps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener solicitudes' });
  }
};

const deleteSolicitud = async (req, res) => {
  const solicitudId = req.params.id;

  try {
    const rowsDeleted = await SolicitudModel.destroy({
      where: { id_solicitud: solicitudId },
    });

    if (rowsDeleted > 0) {
      res.json({ message: 'Solicitud eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Solicitud no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar solicitud' });
  }
};

module.exports = {
  getAllSolicitudes,
  createSolicitud,
  updateSolicitudById,
  deleteSolicitud,
  getSolicitudById,
};
