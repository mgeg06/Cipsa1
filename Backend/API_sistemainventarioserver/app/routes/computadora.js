import express from 'express'; // express para la rutas API
import {
    createComputadora,
    updateComputadora,
    findComputadoraByID,
    findComputadoraIp,
    findComputadoraByEquipodecomputo,
    findAllComputadoras,
    deleteComputadoraByID
        } from '../controllers/computadora.js';

const router = express.Router();


router.post   ( "/computadora/register"                  , createComputadora        ), // Crear computadora
router.put    ( "/computadora/update/:id"                , updateComputadora          ), // Actualizar computadora   
router.get    ( "/computadora/:id"                    , findComputadoraByID        ), // Encontar computadora Por id   
router.get    ( "/computadora/computadoraip/:ip"                      , findComputadoraIp    ), // Encontar computadora  
router.get    ( "/computadora/buscarequipodecomputo/:equipodecomputo", findComputadoraByEquipodecomputo), // Encontrar computadora por eqipo de computo
router.get    ( "/computadoras/list"                    , findAllComputadoras        ), // Encontrar todas las computadora   
router.delete ( "/computadora/delete/:id"                , deleteComputadoraByID      )  // Borrar computadora por id





export default router;

