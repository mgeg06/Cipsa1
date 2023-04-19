
import Computadora from '../models/Computadora.js';
import {where} from 'sequelize';


// Crear comptadora >> POST Crear
const createComputadora = async( req, res ) => {

    const {  
        equipodecomputo   ,
        usuario           ,
        ubicacion         ,
        ip                ,
        estatus           ,
        marcamonitor      ,
        modelomonitor     ,
        numeroserie       ,
        procesador        ,
        sistema           ,
        memoria           ,
        almacenamiento    ,
        macethernet       ,
        macwifi           ,
        marcacpu          ,
        modelocpu         ,
        numeroseriecpu    ,
        marcateclado      ,
        modeloteclado     ,
        numeroserieteclado,
        marcamause        ,
        modelomause       ,
        numeroseriemause  ,
        fechamante             } = req.body;

    try {
        const existsEquipodecomputo = await Computadora.findOne( { where: { equipodecomputo } })
    
        if ( existsEquipodecomputo ) {
             return res.json({ mensaje: `El equipo de computo ${equipodecomputo} ya esta en existencia` })
        } else {
            const newComputadora = await Computadora.create ( {     
                equipodecomputo   ,
                usuario           ,
                ubicacion         ,
                ip                ,
                estatus           ,
                marcamonitor      ,
                modelomonitor     ,
                numeroserie       ,
                procesador        ,
                sistema           ,
                memoria           ,
                almacenamiento    ,
                macethernet       ,
                macwifi           ,
                marcacpu          ,
                modelocpu         ,
                numeroseriecpu    ,
                marcateclado      ,
                modeloteclado     ,
                numeroserieteclado,
                marcamause        ,
                modelomause       ,
                numeroseriemause  ,
                fechamante        , 
            } )
            return res.json({ mensaje : ` La Computadora ${newComputadora} ha sido creado con exito` });
        }
    } catch( error ) {
        console.log( error )
        return res.json({ mensaje : `Error al crear la computadora ` })
    }
};

// Actualizar computadora >> PUT Actualizar o Modificar
const updateComputadora = async( req, res ) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const computadora = await Computadora.findOne({ where : {id }});
        
        if ( !computadora ) {
            return res.status(404).json({
                mensaje: 'No existe la computadora con el ID: ' + id 
            })
        } 
        await computadora.update(body);
        res.json( computadora);
    } catch ( err ) {
        res.json(err)
    }
};

// Encontrar computadora por ID >> GET Consultar Informacion
const findComputadoraByID = async( req, res ) => {

    const { id } = req.params;
    const computadora = await Computadora.findOne({ where: {id} });

    if ( !computadora ) {
        return res.status(400).json({
            mensaje: 'No existe la computadora con el: ' + id + '.'
        });
    } res.json ( computadora );
};

// Econtrar computadora por ip >> GET Consultar Informacion
const findComputadoraIp = async ( req, res ) => {

    const { ip } = req.params;
    const computadora = await Computadora.findOne({ where: {ip} });

    if ( !computadora ) {
        return res.status(404).json({
            mensaje: `No existe la computaora con la ip: ${ip}`
        })
    }
    res.json( computadora );
}; 

// Encontrar computadora por equipodecomputo >> GET Consultar Informacion
const findComputadoraByEquipodecomputo = async( req, res ) => {

    const { equipodecomputo } = req.params;
    const computadora = await Computadora.findOne({ where: {equipodecomputo}});

    if ( !computadora ) {
        return res.status(404).json({
            mensaje: `No existe la computadora con el nombre de: ${equipodecomputo}`
        })
    }
    res.json( computadora );
    
};

// Encontrar todas las computadoras >> GET Consultar Informacion
const findAllComputadoras = async( req, res ) => {

    const allComputadoras = await Computadora.findAll();
    res.json( allComputadoras )
    return false;
    
};

// Eliminar computadora por ID >> DELETE Eliminar
const deleteComputadoraByID = async( req, res ) => {

    const { id } = req.params;
    const computadora = await Computadora.findOne({ where : { id } });
 
    if ( !computadora ) {
        return res.status(404).json({
            mensaje : `No existe la computadora con el ID: ${id} + ${equipodecomputo}.`
        });
    }
    await computadora.destroy();
    res.json({mensaje : `La computadora con ID ${id} ha sido eliminado`});

};

export  {
    createComputadora,
    updateComputadora,
    findComputadoraByID,
    findComputadoraIp,
    findComputadoraByEquipodecomputo,
    findAllComputadoras,
    deleteComputadoraByID
}



