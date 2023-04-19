
import Telefono from '../models/Telefono.js';
import { where } from 'sequelize';


// Crear telefono >> POST Crear
const createTelefono = async (req, res) => {

    const {
        extencion,
        recepcion,
        departamento,
        marca,
        modelo,
        serie,
        descripcion,
        contra,
        ip  } = req.body;
        
    try {
        const existsExtencion = await Telefono.findOne({ where: {extencion} })

        if (existsExtencion) {
            return res.json({ mensaje: `El telefono ${extencion} ya esta en existencia` })
        } else {
            const newTelefono = await Telefono.create({

                extencion,
                recepcion,
                departamento,
                marca,
                modelo,
                serie,
                descripcion,
                contra,
                ip,
            })
            return res.json({ mensaje: ` La Telefono ${newTelefono} ha sido creada con exito` });
        }
    } catch (error) {
        console.log(error)
        return res.json({ mensaje: `Error al crear telefono` })
    }
};

// Actualizar telefono >> PUT Actualizar o Modificar
const updateTelefono = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const telefono = await Telefono.findOne({ where: { id } });

        if (!telefono) {
            return res.status(404).json({
                mensaje: 'No existe la telefono con el ID: ' + id
            })
        }
        await telefono.update(body);
        res.json(telefono);
    } catch (err) {
        res.json(err)
    }
};

// Encontrar telefono por ID >> GET Consultar Informacion
const findTelefonoByID = async (req, res) => {

    const { id } = req.params;
    const telefono = await Telefono.findOne({ where: { id } });

    if (!telefono) {
        return res.status(400).json({
            mensaje: 'No existe la telefono con el: ' + id + '.'
        });
    } res.json(telefono);
};

// Econtrar telefono por ip >> GET Consultar Informacion
const findTelefonoIp = async ( req, res ) => {

    const { ip } = req.params;
    const telefono = await Telefono.findOne({ where: {ip} });

    if ( !telefono ) {
        return res.status(404).json({
            mensaje: `No existe la computaora con la ip: ${ip}`
        })
    }
    res.json( telefono );
}; 

// Encontrar telefono por equipodecomputo >> GET Consultar Informacion
const findTelefonoByExtencion = async (req, res) => {

    const { extencion } = req.params;
    const telefono = await Telefono.findOne({ where: { extencion } });

    if (!telefono) {
        return res.status(404).json({
            mensaje: `No existe la telefono con el nombre de: ${extencion}`
        })
    }
    res.json(telefono);

};

// Encontrar todas las telefonos >> GET Consultar Informacion
const findAllTelefonos = async (req, res) => {

    const allTelefonos = await Telefono.findAll();
    res.json(allTelefonos)
    return false;

};

// Eliminar Bobina por ID >> DELETE Eliminar
const deleteTelefonoByID = async (req, res) => {

    const { id } = req.params;
    const telefono = await Telefono.findOne({ where: { id } });

    if (!telefono) {
        return res.status(404).json({
            mensaje: `No existe la computadora con el ID: ${id} + ${extencion}.`
        });
    }
    await telefono.destroy();
    res.json({ mensaje: `La telefono con ID ${id} ha sido eliminado` });

};

export {
    createTelefono,
    updateTelefono ,
    findTelefonoByID,
    findTelefonoIp,
    findTelefonoByExtencion,
    findAllTelefonos,
    deleteTelefonoByID
}



