import express from 'express'; // express para la rutas API
import {
    createImpresora,
    updateImpresora,
    findImpresoraByID,
    findImpresoraMarca,
    findImpresoraByModelo,
    findAllImpresoras,
    deleteImpresoraByID
        } from '../controllers/impresora.js';

const router = express.Router();


router.post   ( "/impresora/register"                  , createImpresora        ), // Crear impresora
router.put    ( "/impresora/update/:id"                , updateImpresora          ), // Actualizar impresora   
router.get    ( "/impresora/:id"                    ,  findImpresoraByID     ), // Encontar impresora Por id   
router.get    ( "/impresora/:marca"                      ,  findImpresoraMarca    ), // Encontar impresora  
router.get    ( "/impresora/:modelo", findImpresoraByModelo), // Encontrar impresora por eqipo de computo
router.get    ( "/impresoras/list/"                    , findAllImpresoras       ), // Encontrar todas las impresora   
router.delete ( "/impresora/delete/:id"                , deleteImpresoraByID      )  // Borrar impresora por id





export default router;

