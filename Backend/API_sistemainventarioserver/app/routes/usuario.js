
import express from 'express'; // express para la rutas API
import {
    createUsuario,
    updateUsuario,
    findUsuarioByID,
    findUsuarioCorreo,
    findUsuarioByPlanta,
    findAllUsuarios,
    deleteUsuarioByID

        } from '../controllers/usuario.js';

const router = express.Router();


router.post   ( "/usuario/register"                  , createUsuario        ), // Crearusuario
router.put    ( "/usuario/update/:id"                ,  updateUsuario          ), // Actualizar impresora   
router.get    ( "/usuario/:id"                    ,  findUsuarioByID     ), // Encontarusuario Por id   
router.get    ( "/usuario/:correo"                      ,  findUsuarioCorreo    ), // Encontarusuario  
router.get    ( "/usuario/:modelo",  findUsuarioByPlanta), // Encontrarusuario por eqipo de computo
router.get    ( "/usuarios/list/"                    , findAllUsuarios       ), // Encontrar todas lasusuario   
router.delete ( "/usuario/delete/:id"                , deleteUsuarioByID     )  // Borrarusuario por id





export default router;