
import express from 'express'; // express para la rutas API
import {
    createTelefono,
    updateTelefono ,
    findTelefonoByID,
    findTelefonoIp,
    findTelefonoByExtencion,
    findAllTelefonos,
    deleteTelefonoByID

        } from '../controllers/telefono.js';

const router = express.Router();


router.post   ( "/telefono/register"                  , createTelefono        ), // Crear telefono
router.put    ( "/telefono/update/:id"                ,  updateTelefono          ), // Actualizar impresora   
router.get    ( "/telefono/:id"                    ,  findTelefonoByID     ), // Encontar telefono Por id   
router.get    ( "/telefono/telefonoip/:ip"                      ,  findTelefonoIp    ), // Encontar telefono  
router.get    ( "/telefono/buscartelefono/:modelo", findTelefonoByExtencion), // Encontrar telefono por eqipo de computo
router.get    ( "/telefonos/list/"                    , findAllTelefonos       ), // Encontrar todas las telefono   
router.delete ( "/telefono/delete/:id"                , deleteTelefonoByID      )  // Borrar telefono por id





export default router;