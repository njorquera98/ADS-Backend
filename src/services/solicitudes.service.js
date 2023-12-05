const SolicitudModel = require('../models/solicitud');

const createSolicitud = async (solicitudBody) => {
  delete solicitudBody.id_solicitud;
  const result = await SolicitudModel.create(solicitudBody);
  return result;
};

const getSolicitudes = async () => {
  const result = await SolicitudModel.findAll();
  return result;
};

const getSolicitudById = async (id) => {
  const result = await SolicitudModel.findAll({
    where: {
      id_solicitud: id
    }
  });
  return result[0];
};

const updateSolicitudById = async (id, solicitudBody) => {
  const result = await SolicitudModel.update(solicitudBody, {
    where: {
      id_solicitud: id
    }
  });
  return result;
};

const deleteSolicitudById = async (id) => {
  const result = await SolicitudModel.destroy({
    where: {
      id_solicitud: id
    }
  });
  return result;
};

module.exports = {
  createSolicitud,
  getSolicitudes,
  getSolicitudById,
  updateSolicitudById,
  deleteSolicitudById
};
