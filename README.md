# Ejercicio Practica_Mongo

## Descripcion

---

Ejercicio practico para aprendizaje de mongo, se creo una base de datos simulando el manejo de alquileres de vehiculos, teniento el cuenta el siguiente diagrama:

![Diagrama en el que se fundamento la base de datos](./diagramaGuia.png)

---

## Modo de uso:

---

### Si desea consultar directamente sin el uso de la API:

1. Clonar el repositorio en su dispositivo
2. Es necesario de tener Mongo instalado en su computadora en caso de no ser asi le recomiendo visitar el siguiente link: https://www.youtube.com/watch?v=2cWZ0lFbJoY
3. Tambien es recomentable tener la extension `MongoDB for Vs Code`, en caso de no tenerla instalela, o utilize alguna otra plataforma que le permita ejecutar el archivo query para la creacin de las colecciones de la base de datos:
4. Para utilizar la extension haga lo siguiente:
- 4.1. Abra la extension desde el panel izquierdo de visual studio code, en el simbolo de la hoja
- 4.2. En conecciones abra el panel de nueva coneccion
- 4.3. Si tiene una conexion configurada desde Athlas copie el string de la conexion con los datos de usuario y contraseña del perfil creado, si va a utilizar la conexion de la base de datos actual use el siguiente link `mongodb+srv://admin:admin123456@cluster0.y7pgxmx.mongodb.net/`
- 4.3. Si no tiene una conexion configurada y desea hacerlo de manera local selecciona la opcion avanzada y luego presione conectar para hacerlo de manera local o configure los datos de la conexion.

5. **SOLO Si** va a utilizar una conexion diferente a la de el proyecto Ejecutar el archivo query.mongodb que se encuentra dentro del directorio backend/db/scripts.
6. Para ejecutar las consultas haga lo siguiente:

- 6.1. Abra el archivo consultas.mongodb que se encuentra dentro del directorio backend/db/scripts.
- 6.2. Subraye la consulta a realizar incluyendo el comando `use("db_campus_alquiler");` y ejecutela con el simbolo de la parte superior derecha

### Si desea hacer uso de la API:

1. Si desea crear la base de datos local siga los pases de el apartado anterior hasta el paso 4.
2. Revise que las configuraciones del archivo .env coincidan con las de su ordenador, si no es el caso cambielas.
3. Abra un nuevo bloque de comandos desde el archivo del repositorio, si esta usando visual estudio puede hacerlo desde la pestaña terminal > new terminal.
4. Con el comando "cd backend" ingrese a la carpeta backend.
5. Ejecute el comando `npm install`.
6. Ejecute el comando `npm run dev`.
7. La consola le mostrara la direccion http donde esta corriendo el servidor, la cual de manera predeterminada es `http://127.10.10.10:5010`
8. Para interactuar con los enpoints es recomendable usar una extension como Thunder Client, para ello siga los siguientes pasos:
- 8.1. Descarge la extension Thunder Client desde visual studio code
- 8.2. En el panel izquierdo seleccione la extension Thunder Client y posteriormente en new request
- 8.3. Coloque la url en el panel de direccion de Thunder Client con el endpoint especifico
- 8.4. Seleccione el metodo de la peticion segun corresponda
- 8.5. Si es un metodo POST envie un objeto en formato JSON con la informacion requerida en la pestaña body de Thunder Client

---

## Consultas SQL

---

**Antes de poder realizar cualquier consulta tenga en cuenta lo siguiente:** Esta aplicacion cuenta con un sistema de autorizaciones por token, para obtener una autorizacion para acceder a los endpoint, por cada coleccion el sistema debe validar que el token enviado corresponda a la coleccion a la cual se desea hacer la peticion, por lo tanto usted debe hacer lo siguiente:

1. Acceda al siguiente endpoint para generar el token deseado:

- UrlDefault: http://127.10.10.10:5010/campus/login/:Coleccion
- Descripcion: Debe cambiar el campo `:Coleccion` de la url por cualquiera de los siguientes segun lo requiera:
  - AlquilerDTO
  - EmpleadoDTO
  - ClienteDTO
  - AutomovilDTO
  - ReservaDTO
- Ej: http://127.10.10.10:5010/campus/login/AlquilerDTO

2. Copie el token que sera devuelto como mensaje y envielo dentro del header Authorization, aun si no necesita enviar ningun tipo de informacion en el query debe tener un token de autorizacion por lo cual debe generarlo si o si, de lo contrario no le sera permitido hacer la peticion

Ahora si podra interactuar con las consultas de la siguiente manera: 

---

1. Mostrar todos los clientes registrados en la base de datos.

   - URL: http://127.10.10.10:5010/campus/get/cliente
   - Método: GET
   - Lectura de Datos:
   - Ejemplo: http://127.10.10.10:5010/campus/get/cliente

2. Obtener todos los automóviles disponibles para alquiler.

   - URL: http://127.10.10.10:5010/campus/get/sucursal_automovil/vehicLibre
   - Método: GET
   - Lectura de Datos:
   - Ejemplo: http://127.10.10.10:5010/campus/get/sucursal_automovil/vehicLibre

3. Listar todos los alquileres activos junto con los datos de los clientes relacionados.

   - URL: http://127.10.10.10:5010/campus/get/alquilerActivo
   - Método: GET
   - Lectura de Datos:
   - Ejemplo: http://127.10.10.10:5010/campus/get/alquilerActivo

4. Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.

   - URL: http://127.10.10.10:5010/campus/get/reserva
   - Método: GET
   - Lectura de Datos:
   - Ejemplo: http://127.10.10.10:5010/campus/get/reserva

5. Obtener los detalles del alquiler con el ID_Alquiler específico.

   - URL: http://127.10.10.10:5010/campus/get/alquiler
   - Método: GET
   - Lectura de Datos: query
   - Ejemplo: http://127.10.10.10:5010/campus/get/alquiler?id=2

6. Listar los empleados con el cargo de "Vendedor".

   - URL: http://127.10.10.10:5010/campus/get/empleado?Cargo=Vendedor
   - Método: GET
   - Lectura de Datos: query
   - Ejemplo: http://127.10.10.10:5010/campus/get/empleado?Cargo=Vendedor
   - Nota: debido a las necesidades estrictas de la consulta los unicos cargos a consultar son Asistente, Gerente o Vendedor, en caso de ingresar Asistente o Gerente obtendra tanto asistentes como gerentes

7. Mostrar la cantidad total de automóviles disponibles en cada sucursal.

   - URL: http://127.10.10.10:5010/campus/get/vehiculosEnSucursal
   - Método: GET
   - Lectura de Datos:
   - Ejemplo: http://127.10.10.10:5010/campus/get/vehiculosEnSucursal

8. Obtener el costo total de un alquiler específico.

   - URL: http://127.10.10.10:5010/campus/get/alquiler
   - Método: GET
   - Lectura de Datos: query
   - Ejemplo: http://127.10.10.10:5010/campus/get/alquiler?id=1&cost=true
   - Nota: El valor cost es un booleano que puede ser true o false, en caso de ser falso devolvera la informacion de dicho alquiler unicamente

9. Listar los clientes con el DNI específico.

   - URL: http://127.10.10.10:5010/campus/get/cliente
   - Método: GET
   - Lectura de Datos: query
   - Ejemplo: http://127.10.10.10:5010/campus/get/cliente?document=1098817776

10. Mostrar todos los automóviles con una capacidad mayor a 5 personas.

    - URL: http://127.10.10.10:5010/campus/get/automovil
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/automovil?Capacidad=5
    - Nota: debido a las necesidades estrictas de la consulta la unica capacidad que se puede ingresar es 5

11. Obtener los detalles del alquiler que tiene fecha de inicio en '2023 07 05'.

    - URL: http://127.10.10.10:5010/campus/get/alquiler
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/alquiler?startingDate=2023-09-01
    - Nota: debido a las necesidades estrictas de la consulta la unica fecha que se puede ingresar es 2023-09-01

12. Listar las reservas pendientes realizadas por un cliente específico.

    - URL: http://127.10.10.10:5010/campus/get/reserva
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/reserva?clientId=1

13. Mostrar los empleados con cargo de "Gerente" o "Asistente".

    - URL: http://127.10.10.10:5010/campus/get/empleado
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/empleado?Cargo=Asistente
    - Nota: debido a las necesidades estrictas de la consulta los unicos cargos a consultar son Asistente, Gerente o Vendedor, en caso de ingresar Asistente o Gerente obtendra tanto asistentes como gerentes

14. Obtener los datos de los clientes que realizaron al menos un alquiler.

    - URL: http://127.10.10.10:5010/campus/get/cliente
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/cliente?rented=true
    - Nota: rented es un parametro que solo recibira valores booleanos true o false y unicamente devolvera aquellos clientes que hayan realizado almenos un alquiler si este valor es true

15. Listar todos los automóviles ordenados por marca y modelo.

    - URL: http://127.10.10.10:5010/campus/get/automovil
    - Método: GET
    - Lectura de Datos:
    - Ejemplo: http://127.10.10.10:5010/campus/get/automovil

16. Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.

    - URL: http://127.10.10.10:5010/campus/get/vehiculosEnSucursal
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/vehiculosEnSucursal?Address=true
    - Nota: Address es un parametro que solo recibira valores booleanos true o false y unicamente mostrara la informacion de las sucursales detalladas si este valor es true

17. Obtener la cantidad total de alquileres registrados en la base de datos.

    - URL: http://127.10.10.10:5010/campus/get/alquiler
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/alquiler?amount=true
    - Nota: amount es un parametro que solo recibira valores booleanos true o false y unicamente mostrara el total de alquileres en la base de datos si este valor es true 

18. Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.

    - URL: http://127.10.10.10:5010/campus/get/automovil
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/automovil?Capacidad=5&Disponible=true
    - Nota: Disponible es un parametro que solo recibira valores booleanos true o false y unicamente mostrara el los automoviles que tengan capacidad igual a 5 personas y esten disponibles si estos dos parametros se encuentran tal cual en la query

19. Obtener los datos del cliente que realizó la reserva con ID_Reserva específico

    - URL: http://127.10.10.10:5010/campus/get/reserva
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/reserva?ID=2
    - Nota: debe colocar en la query el parametro ID tal cual seguido del id de la reserva de la cual desea conocer la informacion del cliente como se muestra en el ejemplo

20. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.

    - URL: http://127.10.10.10:5010/campus/get/alquiler
    - Método: GET
    - Lectura de Datos: query
    - Ejemplo: http://127.10.10.10:5010/campus/get/alquiler?startingDate=2023-07-24&finalDate=2023-08-06
    - Nota: debe colocar en la query los parametros startingDate y finalDate tal cual se muestran, sus valores pueden variar segun lo deseado, en el ejemplo se indican unos valores diferentes al enunciado ya que no existen alquileres con las condiciones del enunciado

#.

    - URL: http://127.10.10.10:5010/campus/get/sucursal
    - Método: GET
    - Lectura de Datos:
    - Ejemplo: http://127.10.10.10:5010/campus/get/sucursal

---

# Creador:

## Andrès David ELizalde Peralta

---
