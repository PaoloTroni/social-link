/* 
    Controlador que elimina un usuario
*/
const { getConnection } = require('../db/db');
const { generateError } = require('../helpers');
const bcrypt = require('bcrypt');

const deleteUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getConnection();

        // Recuperamos el id del usuario que ha iniciado sesion
        const idAuthUser = req.userId;

        // Recuperamos la contraseña del req.body
        const { password } = req.body;

        // Si no indica la contraseña lanzamos un error
        if (!password) {
            throw generateError(
                '¡Debes indicar la contraseña para eliminar el usuario!',
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

        // Ejecutamos la consulta a la base de datos eliminando al usuario
        await connection.query(`DELETE FROM users WHERE id = ?`, [idAuthUser]);

        // Respondemos
        res.send({
            status: 'Ok',
            message: `¡Usuario con id ${idAuthUser} eliminado con éxito!`,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteUser;
