import UsuarioModel from "../model/usuario.model.js"

export const getAllUsuario = async (req, res) => {
  try{
    const users = await UsuarioModel.findAll()
    res.json(usuario)
  }
  catch (error){
    res.json({
      message: error.message
    })
  }
}
