---
sidebar_position: 1
---

# Programación de aplicaciones con sockets

## ¿Qué son los sockets?

Es importantes antes de comenzar a hablar de la programación de aplicaciones con Sockets, saber qué son, debido a que podemos encontrar diferentes definiciones, mencionaremos algunas de ellas: 

- Los sockets son un método de comunicación entre un programa de cliente y uno de servidor a través de una red. Un socket se define como “el extremo de una conexión”. 
- Un socket, es un método para la comunicación entre un programa del cliente y un programa del servidor en una red. Los sockets se crean y se utilizan con un sistema de peticiones o de llamadas de función a veces llamados interfaz de programación de aplicación de sockets (API). 
- Un socket es también una dirección de Internet, combinando una dirección IP y un número de puerto  Un socket es un punto final de un enlace de comunicación de dos vías entre dos programas que se ejecutan a través de la red.

![Docs Version Dropdown](/img/sockets-application-programming/sockets.png)

## ¿Como se establece la comunicación con los sockets?
Como se menciona en el punto anterior, podemos verlos como cliente y servidor aquellos que tendrán una comunicación, y es por ello que deben ponerse de acuerdo sobre el protocolo que utilizarán. Y para eso, hay dos tipos de socket de los que se hablarán a continuación:

### Orientado a conexión
También llamado socket TCP, este establece un camino virtual entre servidor y cliente, fiable, sin pérdidas de información ni duplicados, la información llega en el mismo orden que se envía. El cliente abre una sesión en el servidor y este guarda un estado del cliente.

El cliente debe contactar al servidor:

- El proceso servidor debe correr primero 
- El servidor debe haber creado algún socket (puerta) que reciba conexiones de clientes 

El cliente contacta al servidor mediante: 

- Crear un socket TCP local al cliente 
- Especificar la dirección IP, el puerto del proceso servidor

### Orientado a no conexión
También conocida como socket UDP, esta se encarga del envío de datagramas de tamaño fijo. No es fiable, puede haber pérdidas de información y duplicados, y la información puede llegar en distinto orden del que se envía. No se guarda ningún estado del cliente en el servidor, por ello, es más tolerante a fallos del sistema. 
Los sockets no son más que puntos o mecanismos de comunicación entre procesos que permiten que un proceso hable (emita o reciba información) con otro proceso incluso estando estos procesos en distintas máquinas. Esta característica de interconectividad entre máquinas hace que el concepto de socket nos sirva de gran utilidad.
Un socket es al sistema de comunicación entre computadores, lo que un buzón o un teléfono es al sistema de comunicación entre personas: un punto de comunicación entre dos agentes (procesos o personas respectivamente) por el cual se puede emitir o recibir información.
