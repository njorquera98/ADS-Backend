const { solicitudesService } = require('../services');

const createSolicitud = async (req, res, next) => {
  try {
    const result = await solicitudesService.createSolicitud(req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getSolicitudes = async (req, res, next) => {
  try {
    const result = await solicitudesService.getSolicitudes();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getSolicitud = async (req, res, next) => {
  try {
    const result = await solicitudesService.getSolicitudById(req.params.solicitudId);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const updateSolicitud = async (req, res, next) => {
  try {
    const result = await solicitudesService.updateSolicitudById(req.params.solicitudId, req.body);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const deleteSolicitud = async (req, res, next) => {
  try {
    await solicitudesService.deleteSolicitudById(req.params.solicitudId);
    res.send(req.params.solicitudId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSolicitud,
  getSolicitudes,
  getSolicitud,
  updateSolicitud,
  deleteSolicitud
};
