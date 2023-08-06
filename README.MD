# Aplicación de Ecommerce

Esta aplicación de Ecommerce se basa en una base de datos PostgreSQL, utiliza Prisma como ORM y Node.js como framework de backend. A continuación, encontrarás instrucciones sobre cómo configurar y utilizar la aplicación.

## Configuración Inicial

### 1. Crear un Usuario en PostgreSQL

Si aún no tienes un usuario en PostgreSQL, crea uno y asigna un nombre y una contraseña.

### 2. Crear la Base de Datos "pruebaafa"

A continuación, crea una base de datos llamada "pruebaafa" y asígnala al usuario de PostgreSQL. Utiliza los siguientes comandos:

```sql
CREATE DATABASE pruebaafa WITH OWNER = "nombre_del_usuario_en_postgres";
GRANT ALL PRIVILEGES ON DATABASE pruebaafa TO "nombre_del_usuario_en_postgres";
ALTER DATABASE pruebaafa OWNER TO "nombre_del_usuario_en_postgres";
```

### 3. Configurar las Variables de Entorno

Edita el archivo `.env` en el directorio de tu proyecto. En este archivo, encontrarás tres variables de entorno:

- `DATABASE_URL`: Cambia esta URL para que coincida con tu configuración de conexión a PostgreSQL. Asegúrate de incluir el usuario, la contraseña, la red, el puerto y el nombre de la base de datos que creaste.

- `PORT_APP`: Define el puerto en el que se inicializará la aplicación de Node.

- `JWT_SECRET`: Establece una clave secreta para el manejo de JWT (JSON Web Tokens).

## Migraciones y Ejecución

1. Instala las Dependencias

Ejecuta el comando `npm i` para instalar todas las dependencias utilizadas en este proyecto.

2. Aplica las Migraciones

Ejecuta el comando `npx prisma migrate dev` para aplicar todas las migraciones. Esto generará el modelo en la base de datos.

3. Inicia el Servidor

Ejecuta el comando `npm run dev` para iniciar el servidor en el puerto definido en la variable de entorno `PORT_APP`.

4. Acceso a Prisma Studio

Para explorar los modelos creados en la base de datos, ejecuta el comando `npx prisma studio`. Esto abrirá una interfaz gráfica donde podrás realizar acciones como crear distribuidores, categorías y productos.

## Uso de la Aplicación

1. Crea Distribuidores, Categorías y Productos

En Prisma Studio, sigue el orden de creación: primero crea distribuidores, luego categorías (por ejemplo, "libros" y "otros productos") y finalmente productos. Si la categoría es "libros", agrega un JSON en el campo de "descripcion extras" con la estructura `{"autor": "nombre del autor", "editorial": "nombre de la editorial"}` para asegurarte de que el producto sea un libro.

2. Pruebas de Backend

Utiliza aplicaciones como Postman o ThunderClient para realizar pruebas en las rutas de backend. Las rutas principales están definidas en el archivo `./src/app.js`, y los paths específicos se encuentran en la carpeta `routes`.

## Seguridad Informática

Este proyecto integra sólidas prácticas de seguridad informática. Incluye una integración de Passport con JWT y una tabla en la base de datos llamada "whiteList". Los tokens generados automáticamente incluyen un campo adicional encriptado llamado "jti". La tabla "whiteList" registra este "jti", la última actividad y el usuario con ese "jti" en su token de acceso. Esto garantiza una escalabilidad y una fácil integración con otros proyectos, siguiendo un patrón similar a OAuth. Los tokens se vencen después de 15 minutos de inactividad y todas las rutas están protegidas por middlewares.

## Manejo de Errores

El proyecto maneja errores con funciones try-catch en cada controlador, además de manejo de errores en transacciones desde PostgreSQL.

## Usabilidad del Proyecto

Este proyecto permite:

- Registrar categorías de productos, distribuidores y usuarios.
- Iniciar sesión y registrar usuarios.
- Agregar, editar y eliminar productos del carrito.
- Realizar compras: se verifica la existencia y el stock del producto.
- Ofrece protección y validación en todas las rutas mediante middlewares.

Si tienes alguna pregunta o problema, no dudes en comunicarte conmigo. ¡Gracias por utilizar mi aplicación!
