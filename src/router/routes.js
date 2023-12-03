const {
  getAllUsuarios,
  createUsuario,
  getUsuarioById,
  updateUsuarioById,
  deleteUsuario,
} = require('../controllers/usuario-controller');
const router = require('express').Router();

router.get('/usuarios', getAllUsuarios);
router.post('/usuarios', createUsuario);
router.get('/usuarios/:id', getUsuarioById);
router.put('/usuarios/:id', updateUsuarioById);
router.delete('/usuarios/:id', deleteUsuario);

module.exports = router;
