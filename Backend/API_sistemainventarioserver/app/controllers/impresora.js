
import Impresora from '../models/Impresora.js';
import { where } from 'sequelize';


// Crear impresora >> POST Crear
const createImpresora = async (req, res) => {

    const {
        numeroImpresora,
        usuario,
        departamento,
        marca,
        modelo,
        serie,
        descripcion,} = req.body;
    try {
        const existsNumeroImpresora = await Impresora.findOne({ where: {numeroImpresora } })

        if (existsNumeroImpresora) {
            return res.json({ mensaje: `El telefono ${numeroImpresora} ya esta en existencia` })
        } else {
            const newImpresora = await Impresora.create({

                numeroImpresora,
                usuario,
                departamento,
                marca,
                modelo,
                serie,
                descripcion,
            })
            return res.json({ mensaje: ` La impresora ${newImpresora} ha sido creada con exito` });
        }
    } catch (error) {
        console.log(error)
        return res.json({ mensaje: `Error al crear la impresora` })
    }
};

// Actualizar impresora >> PUT Actualizar o Modificar
const updateImpresora = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const impresora = await Impresora.findOne({ where: { id } });

        if (!impresora) {
            return res.status(404).json({
                mensaje: 'No existe la impresora con el ID: ' + id
            })
        }
        await impresora.update(body);
        res.json(impresora);
    } catch (err) {
        res.json(err)
    }
};

// Encontrar impresora por ID >> GET Consultar Informacion
const findImpresoraByID = async (req, res) => {

    const { id } = req.params;
    const impresora = await Impresora.findOne({ where: { id } });

    if (!impresora) {
        return res.status(400).json({
            mensaje: 'No existe la impresora con el: ' + id + '.'
        });
    } res.json(impresora);
};

// Econtrar impresora por ip >> GET Consultar Informacion
const findImpresoraMarca = async (req, res) => {

    const { marca } = req.params;
    const impresora = await Impresora.findOne({ where: { marca } });

    if (!impresora) {
        return res.status(404).json({
            mensaje: `No existe la impresora con la ip: ${marca}`
        })
    }
    res.json(impresora);
};

// Encontrar impresora por modelo >> GET Consultar Informacion
const findImpresoraByModelo = async (req, res) => {

    const { modelo } = req.params;
    const impresora = await Impresora.findOne({ where: { modelo } });

    if (!impresora) {
        return res.status(404).json({
            mensaje: `No existe la impresora con el nombre de: ${modelo}`
        })
    }
    res.json(impresora);

};

// Encontrar todas las impresoras >> GET Consultar Informacion
const findAllImpresoras = async (req, res) => {

    const allImpresoras = await Impresora.findAll();
    res.json(allImpresoras)
    return false;

};

// Eliminar impresora por ID >> DELETE Eliminar
const deleteImpresoraByID = async (req, res) => {

    const { id } = req.params;
    const impresora = await Impresora.findOne({ where: { id } });

    if (!impresora) {
        return res.status(404).json({
            mensaje: `No existe la impresora con el ID: ${id} + ${numeroImpresora}.`
        });
    }
    await impresora.destroy();
    res.json({ mensaje: `La impresora con ID ${id} ha sido eliminado` });

};

export {
    createImpresora,
    updateImpresora,
    findImpresoraByID,
    findImpresoraMarca,
    findImpresoraByModelo,
    findAllImpresoras,
    deleteImpresoraByID
}



