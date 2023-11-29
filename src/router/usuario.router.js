const router = require("express")
//crear controladores
const { getUsuario, createUsuario, deleteUsuario } = require("../controllers/") //falta archivo
const Usuario = require("../model/usuario.model")

router.get("/usuario", getUsuario);
router.post("/usuario", createUsuario);
router.delete("/usuario", deleteUsuario);

module.exports = router;
