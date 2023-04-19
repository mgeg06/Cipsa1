import { where } from 'sequelize';
import Usuario from '../models/Usuario.js';

// Crear usuario>> POST Crear
const createUsuario = async (req, res) => {

    const {
        nombre,
        apellidop,
        apellidom,
        planta,
        area,
        correo, } = req.body;
    try {
        const existsNombre = await Usuario.findOne({ where: {nombre } })

        if (existsNombre) {
            return res.json({ mensaje: `El telefono ${nombre} ya esta en existencia` })
        } else {
            const newUsuario = await Usuario.create({

                nombre,
                apellidop,
                apellidom,
                planta,
                area,
                correo,
            })
            return res.json({ mensaje: ` La usuario ${newUsuario} ha sido creada con exito` });
        }
    } catch (error) {
        console.log(error)
        return res.json({ mensaje: `Error al crear la usuario` })
    }
};

// Actualizar usuario>> PUT Actualizar o Modificar
const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findOne({ where: { id } });

        if (!usuario) {
            return res.status(404).json({
                mensaje: 'No existe la usuario con el ID: ' + id
            })
        }
        await usuario.update(body);
        res.json(usuario);
    } catch (err) {
        res.json(err)
    }
};


// Encontrar usuariopor ID >> GET Consultar Informacion
const findUsuarioByID = async (req, res) => {

    const { id } = req.params;
    const usuario = await Usuario.findOne({ where: { id } });

    if (!usuario) {
        return res.status(400).json({
            mensaje: 'No existe la usuariocon el: ' + id + '.'
        });
    } res.json(usuario);
};

// Econtrar usuariopor ip >> GET Consultar Informacion
const findUsuarioCorreo = async (req, res) => {

    const { correo } = req.params;
    const usuario = await Usuario .findOne({ where: { correo } });

    if (!usuario ) {
        return res.status(404).json({
            mensaje: `No existe la computaora con la ip: ${correo}`
        })
    }
    res.json(usuario );
};

// Encontrar usuariopor equipodecomputo >> GET Consultar Informacion
const findUsuarioByPlanta = async (req, res) => {

    const { planta } = req.params;
    const usuario = await Usuario.findOne({ where: { planta } });

    if (!usuario) {
        return res.status(404).json({
            mensaje: `No existe la usuariocon el nombre de: ${planta}`
        })
    }
    res.json(usuario);

};

// Encontrar todas las computadoras >> GET Consultar Informacion
const findAllUsuarios = async (req, res) => {

    const allUsuarios = await Usuario.findAll();
    res.json(allUsuarios)
    return false;

};

// Eliminar Bobina por ID >> DELETE Eliminar
const deleteUsuarioByID = async (req, res) => {

    const { id } = req.params;
    const usuario = await Usuario.findOne({ where: { id } });

    if (!usuario) {
        return res.status(404).json({
            mensaje: `No existe la usuariocon el ID: ${id} + ${nombre}.`
        });
    }
    await usuario.destroy();
    res.json({ mensaje: `La usuario con ID ${id} ha sido eliminado` });

};

export {
    createUsuario,
    updateUsuario,
    findUsuarioByID,
    findUsuarioCorreo,
    findUsuarioByPlanta,
    findAllUsuarios,
    deleteUsuarioByID
}



