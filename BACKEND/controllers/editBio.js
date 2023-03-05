/* 
    Controlador que edita la biografia del usuario
*/
const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers');
const { getConnection } = require('../db/db');
const Joi = require('@hapi/joi');

const editBio = async (req, res, next) => {
    let connection;

    try {
        connection = await getConnection();

        // Guardamos el id del usuario que ha iniciado sesion
        const idUserAuth = req.userId;

        // Recuperamos la biografia del cuerpo de la peticion previa validación con JOI
        const schema = Joi.object().keys({
            biography: Joi.string().max(300).allow(null, ''),
        });

        const validation = schema.validate(req.body);

        if (validation.error) {
            throw generateError(validation.error.message, 400);
        }

        const { biography } = req.body;

        // Modificamos los datos
        await connection.query(`UPDATE users SET biography = ? WHERE id = ?`, [
            biography,
            idUserAuth,
        ]);

        res.send({
            status: 'Ok',
            message: `¡Datos del usuario modificados con éxito!`,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editBio;
