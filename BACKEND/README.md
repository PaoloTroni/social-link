# API Compartir-enlaces - SOCIAL LINKS

Implementar una API que permita a los usuarios registrarse y compartir enlaces web que
consideren interesantes. Otros usuarios podrán votarlos si les gustan.

## Para la ejecución de este proyecto seguir los siguientes pasos:

-   Crear una base de datos vacía en una instancia MySQL en local.
-   CREATE DATABASE IF NOT EXISTS SOCIAL_LINKS;

-   Copiar el archivo `.env.example` como `.env` y rellenar las variables de entorno con sus datos necesarios.

-   Ejecutar `npm i` para instalar todas las dependencias necesarias.

-   El comando `npm run db` ejecutará la creación de las tablas.

-   Ejecutar el comando `npm run dev` para poner a la escucha al servidor.

-   Importar la colección `SOCIAL_LINKS.postman_collection` a la aplicación de Postman con todos los endpoints creados.

## Endpoints

### Usuarios

-   POST[/user] - Registra un nuevo usuario.
-   POST[/login] - Login de usuario. (devuelve un token).
-   GET[/user] - Devuelve información del usuario logeado. TOKEN.
-   GET[/users/:idUser] - Devuelve información de un usuario en base a su id. TOKEN.
-   PUT[/user/edit] - Modifica username o email. TOKEN.
-   PUT[/users/password] - Modifica la contraseña del usuario. TOKEN.
-   PUT[/users/bio] - Modifica la biografia del usuario. TOKEN.
-   DELETE[/users] - Elimina un usuario y todos sus datos. TOKEN.

### Enlaces

-   POST[/] - Inserta un nuevo enlace. TOKEN.
-   GET[/] - Devuelve todos los enlaces publicados, ordenados por fecha (desc). y con la media de votos (en caso los hubiera) TOKEN.
-   GET[/link/:id] - Devuelve un enlace en base a su id. TOKEN.
-   DELETE[/link/:id] - Elimina un enlace. TOKEN.

### Votos

-   POST[/votos/:idLink] - Vota un enlace. TOKEN.
