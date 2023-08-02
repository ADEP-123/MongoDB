# Ejercicio Practica_Mongo

## Descripcion
---
Ejercicio practico para aprendizaje de mongo, se creo una base de datos simulando el manejo de alquileres de vehiculos, teniento el cuenta el siguiente diagrama:

![Diagrama en el que se fundamento la base de datos](./diagramaGuia.png)

---
## Modo de uso:
---
1. Clonar el repositorio en su dispositivo
2. Es necesario de tener Mongo instalado en su computadora en caso de no ser asi le recomiendo visitar el siguiente link: https://www.youtube.com/watch?v=2cWZ0lFbJoY
3. Tambien es recomentable tener la extension MongoDB for Vs Code, en caso de no tenerla instalela, o utilize alguna otra plataforma que le permita ejecutar el archivo query para la creacin de las colecciones de la base de datos:
4. Para utilizar la extension haga lo siguiente:
  - 4.1. Abra la extension desde el panel izquierdo de visual studio code, en el simbolo de la hoja
  - 4.2. En conecciones abra el panel de nueva coneccion
  - 4.3. Si tiene una conexion configurada desde Athlas copie el string de la conexion con los datos de usuario y contraseña del perfil creado, si va a utilizar la conexion de la base de datos actual use el siguiente link ```mongodb+srv://admin:Admin123456@cluster0.y7pgxmx.mongodb.net/```
  - 4.3. Si no tiene una conexion configurada y desea hacerlo de manera local selecciona la opcion avanzada y luego presione conectar para hacerlo de manera local o configure los datos de la conexion.
5. SOLO Si va a utilizar una conexion diferente a la de el proyecto Ejecutar el archivo query.mongodb.
6. Para ejecutar las consultas haga lo siguiente:
  - 6.1. Abra el archivo consultas.mongodb
  - 6.2. Subraye la consulta a realizar incluyendo el comando ```use("db_campus_alquiler");```


