---
sidebar_position: 2
---

# VPN, protocolos y prácticas recomendadas

## VPN, ¿qué es?

Acrónimo de Virtual Private Network - Red privada virtual, es un mecanismo empleado por dispositivos activos o por software que permite generar un canal seguro de comunicación, utiliza una infraestructura pública compartida como Internet en la cual ofrece las facilidades y ventajas de una red privada. Dentro de las redes privadas se consideran las VPN y LAN virtuales, pero dentro de las VPN sus clasificaciones con base en su modo de trabajo son host-to-host `figura 3.8`, host-tonetwork `figura 3.9` y network-to-network `figura 3.10`

![Docs Version Dropdown](/img/data-communication-security/VPN.JPG)

## Protocolos VPN en el modelo OSI

Las VPN's pueden ser configuradas con diferentes protocolos PPTP, L2TP, **IPSEC**, SSL, éstos definen en qué capa del modelo OSI trabajarán`figura 3.11`. El protocolo PPTP fue desarrollado por Microsoft y actualmente es un estándar de facto, suficientemente seguro para casi todas las aplicaciones, el protocolo L2TP es un estándar de la IETF, el problema de este protocolo es su interoperabilidad.

![Docs Version Dropdown](/img/data-communication-security/VPN-OSI.JPG)

### Prácticas recomendadas

La configuración de éstos depende de las necesidades de la empresa, es conveniente su implementación pero también puede crear grandes agujeros en la red, algunas prácticas que se recomiendan son:

- **Asegurar el sistema operativo de los equipos de comunicación:** Una solución de VPN no
  brinda solución efectiva si el sistema operativo de los equipos no es seguro, presumiblemente el
  firewall deberá proteger de los ataques al sistema operativo, por tal razón en un esquema VPN se
  debe de contemplar un firewall para rechazar los hosts que no son reconocidos para implementar
  una comunicación.

- **Implementar alguna VPN de un punto final hacia un servidor interno de la organización:** Con una implementación fuerte de filtrado hacia la VPN puede ser fácilmente comprometida para obtener acceso a la red desde cualquier lugar.

- **Asegurar los host remotos:** Qué los usuarios que se conectan de manera remota a la VPN utilicen software VPN seguro.

- **Utilizar un solo ISP:** Utilizar un solo ISP (Internet Services Provider – Proveedor de servicios de Internet) para conectar todos los puntos finales, esto garantiza el acceso hacia ellos.

## Protección de comunicaciones privadas

Usualmente algunos de los usuarios que pueden beneficiarse de los VPN son:

- Usuarios remotos y móviles.
- Usuarios que se comunican entre la oficina central y las sucursales u otras ubicaciones exteriores a la red.
- Usuarios que se comunican de empresa a empresa (B2B).

Se producirán riesgos de seguridad si no se limita el acceso de los usuarios a los sistemas confidenciales. Si no se imponen limitaciones en cuanto a quién puede acceder a un sistema, aumentarán las probabilidades de que no se mantenga la confidencialidad de la información de la compañía. Deberá elaborar un plan que restrinja el acceso al sistema a aquellos usuarios que necesiten compartir la información sobre el sistema. Una conexión VPN permite controlar el tráfico de la red, a la vez que ofrece importantes características de seguridad, como la autenticación y la privacidad de los datos. La creación de múltiples conexiones VPN le permitirá controlar quién puede acceder a cada uno de los sistemas en cada conexión. Por ejemplo, los departamentos de Contabilidad y Recursos Humanos se pueden conectar mediante su propia VPN.

Cuando permite a los usuarios conectarse al sistema por Internet, podría estar enviando datos corporativos confidenciales a través de redes públicas, lo que expondría estos datos a posibles ataques. Una de las opciones para proteger los datos transmitidos es utilizar métodos de cifrado y autenticación para garantizar la privacidad y la seguridad contra los intrusos. Las conexiones VPN ofrecen una solución a una necesidad de seguridad concreta: proteger las comunicaciones entre sistemas. Las conexiones VPN protegen los datos que fluyen entre los dos extremos de la conexión. Además, podrá emplear la seguridad de reglas de paquetes para definir qué paquetes IP pueden pasar por la VPN.

El uso de VPN le permite crear conexiones seguras para proteger el tráfico que fluye entre extremos controlados y de confianza. No obstante, aún deberá tener cuidado sobre qué grado de acceso proporciona a los socios de la VPN. Las conexiones VPN pueden cifrar los datos mientras viajan a través de las redes públicas. Pero, según cómo la configure, es posible que los datos que fluyen por Internet no puedan transportarse a través de una conexión VPN. En este caso, los datos no estarían cifrados mientras fluyen a través de las redes internas que se comunican mediante la conexión. Por lo tanto, debe planificar detenidamente cómo hay que configurar cada conexión VPN. Asegúrese de que proporciona al socio de la VPN acceso a únicamente aquellos hosts o recursos de la red interna a los que le interesa que acceda.

### Ejemplo

Por ejemplo, puede darse el caso de un distribuidor que necesita obtener información sobre las piezas que hay en stock. Esta información se encuentra en una base de datos que permite actualizar las páginas Web de la intranet. Supongamos que le interesa autorizar a este distribuidor a acceder a estas páginas directamente por una conexión VPN. Pero, por otro lado, no quiere que el distribuidor pueda acceder a los otros recursos del sistema, como a la propia base de datos. Puede configurar la conexión VPN de forma que el tráfico entre los dos extremos esté restringido al puerto 80. El puerto 80 es el puerto por omisión que utiliza el tráfico de HTTP. Por lo tanto, el distribuidor solo podrá enviar y recibir las peticiones y las respuestas de HTTP a través de esa conexión.

El tipo de tráfico que fluye a través de la conexión VPN se puede restringir, por lo que la conexión proporciona una medida de seguridad a nivel de red. Sin embargo, VPN no funciona de la misma forma que un cortafuegos para regular el tráfico que entra y sale del sistema. Asimismo, una conexión VPN no es el único medio disponible para proteger las comunicaciones entre el sistema operativo i5/OS y los otros sistemas. Se basa en las necesidades de seguridad que se tengan.
