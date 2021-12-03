---
sidebar_position: 2
---

# Arquitectura cliente-servidor

## ¿Cuál es la arquitectura entre el cliente - servidor?
Es un modelo de aplicación distribuida en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Un programa cliente realiza peticiones a otro programa, el servidor, que le da respuesta. Esta idea también se puede aplicar a programas que se ejecutan sobre una sola máquina, aunque es más ventajosa en un sistema operativo multiusuario distribuido a través de una red de computadores. 

En esta arquitectura la capacidad de proceso está repartida entre los clientes y los servidores. La separación entre cliente y servidor es una separación de tipo lógico, donde el servidor no se ejecuta necesariamente sobre una sola máquina ni es necesariamente un sólo programa. Los tipos específi cos de servidores incluyen los servidores webs, los servidores de archivo, los servidores del correo, entre otros. Mientras que sus propósitos varían de unos servicios a otros, la arquitectura básica seguirá siendo la misma.
La comunicación entre procesos a través de sockets se basa en la filosofía cliente-servidor: un proceso en esta comunicación actuará de proceso servidor creando un socket cuyo nombre conocerá el proceso cliente, el cual podrá “hablar” con el proceso servidor a través de la conexión con dicho socket nombrado. 

El proceso crea un socket sin nombre cuyo valor de vuelta es un descriptor sobre el que se leerá o escribirá, permitiéndose una comunicación bidireccional, característica propia de los sockets. El mecanismo de comunicación vía sockets tiene los siguientes pasos:

- El proceso servidor crea un socket con nombre y espera la conexión.
- El proceso cliente crea un socket sin nombre. 
- El proceso cliente realiza una petición de conexión al socket servidor. 
- El cliente realiza la conexión a través de su socket mientras el proceso servidor mantiene el socket servidor original con nombre.

Es muy común en este tipo de comunicación lanzar un proceso hijo, una vez realizada la conexión, que se ocupe del intercambio de información con el proceso cliente mientras el proceso padre servidor sigue aceptando conexiones. Para eliminar esta característica se cerrará el descriptor del socket servidor con nombre en cuanto realice una conexión con un proceso socket cliente.

`Arquitectura client/server en el lenguaje java`
![Docs Version Dropdown](/img/sockets-application-programming/Cliente-Server.png)


## El servidor
A partir de este punto comenzamos con lo que es la programación en C++ de los sockets. Se debe poseer conocimientos de C++, de esta forma será más fácil el atender el procedimiento a seguir.
Con C++ en Unix/Linux, los pasos que debe seguir un programa servidor son los siguientes:

### Pasos

- Realizar la apertura de un socket, mediante la función socket(). Esta función devuelve un descriptor de archivo normal, como puede devolverlo open(). La función socket() no hace absolutamente nada, salvo devolvernos y preparar un descriptor de fi chero que el sistema posteriormente asociará a una conexión en red. 

- Avisar al sistema operativo de que hemos abierto un socket y queremos que asocie nuestro programa a dicho socket. Se consigue mediante la función bind(). El sistema todavía no atenderá a las conexiones de clientes, simplemente anota que cuando empiece a hacerlo, tendrá que avisarnos. Es en esta llamada cuando se debe indicar el número de servicio al que se quiere atender. 

- Avisar al sistema de que comience a atender dicha conexión de red. Se consigue mediante la función listen(). A partir de este momento el sistema operativo anotará la conexión de cualquier cliente para pasárnosla cuando se lo pidamos. Si llegan clientes más rápido de lo que somos capaces de atenderlos, el sistema operativo hace una “cola” con ellos y nos los irá pasando según vayamos pidiéndolo. 

- Pedir y aceptar las conexiones de clientes al sistema operativo. Para ello hacemos una llamada a la función accept(). Esta función le indica al sistema operativo que nos dé al siguiente cliente de la cola. Si no hay clientes se quedará bloqueada hasta que algún cliente se conecte. 

- Escribir y recibir datos del cliente, por medio de las funciones write() y read(), que son exactamente las mismas que usamos para escribir o leer de un archivo. Obviamente, tanto cliente como servidor deben saber qué datos esperan recibir, qué datos deben enviar y en qué formato. 

- Cierre de la comunicación y del socket, por medio de la función close(), que es la misma que sirve para cerrar un archivo.

## El cliente
Los pasos que debe seguir un programa cliente son los siguientes: 

### Pasos

- Realizar la apertura de un socket, como el servidor, por medio de la función socket() 

- Solicitar conexión con el servidor por medio de la función connect(). Dicha función quedará bloqueada hasta que el servidor acepte nuestra conexión o bien si no hay servidor en el sitio indicado, saldrá dando un error. En esta llamada se debe facilitar la dirección IP del servidor y el número de servicio que se desea. 

- Escribir y recibir datos del servidor por medio de las funciones write() y read(). Cerrar la comunicación por medio de close(). 

Como se puede apreciar, el procedimiento en el cliente es mucho más sencillo que el servidor, más sin embargo, se debe como mínimo garantizar en los dos extremos, un paso de establecimiento de la comunicación, uno de transferencia de información y uno mediante el cual se libera la comunicación.



