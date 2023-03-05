/* 
    Controlador para editar la contraseña del usuario
*/

const { getConnection } = require('../db/db');
const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');

let saltRounds = 10;

const editUserPass = async (req, res, next) => {
    let connection;

    try {
        connection = await getConnection();

        // Guardamos el id del usuario que ha iniciado sesion
        const idAuthUser = req.userId;

        // Comprobamos que ha indicado todos los datos obligatorios
        const schema = Joi.object().keys({
            password: Joi.string().min(5).max(20).required(),
            newPass: Joi.string().min(5).max(20).required(),
            confirmNewPass: Joi.string().min(5).max(20).required(),
        });

        const validation = schema.validate(req.body);

        if (validation.error) {
            throw generateError(validation.error.message, 400);
        }
        // Recuperamos del req.body los datos necesarios
        const { password, newPass, confirmNewPass } = req.body;

        // Si no indica la contraseña lanzamos un error
        if (!password) {
            throw generateError(
                '¡Debes indicar la contraseña para cambiar la contraseña actual!',
                400
            ); // Bad Request
        }

        // Recuperamos la contraseña del usuario para hacer la comparacion
        const [user] = await connection.query(
            `SELECT password FROM users WHERE id = ?`,
            [idAuthUser]
        );

        // Comparar las contraseñas
        const validPassword = await bcrypt.compare(password, user[0].password);

        // Si no coinciden las contraseñas
        if (!validPassword) {
            throw generateError('¡La contraseña no es válida!', 401); // Unauthorized
        }

        // Comprobamos que la contraseña actual no sea igual a la nueva contraseña
        if (password === newPass) {
            throw generateError('¡No estás modificando nada!', 400); // BadRequest
        }

        // Comprobamos que la nueva contraseña es igual a la confirmacion de la misma
        if (newPass !== confirmNewPass) {
            throw generateError('¡Las contraseñas no coinciden!', 401); // Unauthorized
        }

        // Encriptamos la nueva contraseña
        const hashedPassword = await bcrypt.hash(newPass, saltRounds);

        // Modificamos la contraseña del usuario
        await connection.query(`UPDATE users SET password = ? WHERE id = ?`, [
            hashedPassword,
            idAuthUser,
        ]);

        // Respondemos
        res.send({
            status: 'Ok',
            message: '¡Contraseña actualizada con éxito!',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editUserPass;
