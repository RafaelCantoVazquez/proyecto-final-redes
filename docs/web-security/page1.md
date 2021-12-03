---
sidebar_position: 1
---

# Certificado SSL

## ¿Qué es?

**Secure Sockets Layer** o mejor conocido como **SSL** es una tecnología estándar que tiene como objeto crear y mantener una conexión a internet de manera segura, así como proteger información confidencial de cualquier tipo que es enviada entre dos sistemas ( puede ser un servidor a un cliente o  un servidor a otro servidor)  con el fin de imposibilitar a los delincuentes tener acceso a esta y lean o modifiquen datos transferibles, incluyendo la posibilidad de contener información personal, como por ejemplo, números de tarjetas de crédito, datos bancarios, nombres, direcciones, etc.

Se utilizan algoritmos de cifrado para codificar todos aquellos datos que son transferidos privando a los hackers el acceso a estos al ser enviados a través de la conexión. Esto con el fin de que todos los datos recaudados entre usuarios y sitios web  o entre dos sistemas tengan una alta dificultad para ser leídos.

## Protocolo TLS

Existe una versión actualizada y más segura del SSL llamada “Transport Layer Security” teniendo como acrónimo TLS. En la actualidad se utilizan las siglas SSL para denominar los certificados de seguridad, debido a que, sigue siendo un término más utilizado.

## ¿Para qué se utiliza?

El certificado SSL es vital y necesario al momento de transferir información confidencial tales como nombres de usuario y contraseñas o procedimiento de pagos.

El objetivo principal del certificado SSL/TLS es consolidar el hecho de que solamente una persona u organización puede acceder a los datos que son transferidos. Esto es importante ya que para que la información sea transferida y  llegue a su destino, antes tiene que pasar por múltiples dispositivos y servidores.

![Docs Version Dropdown](/img/web-security/SSL.png)

Existen tres usos principales que hacen que un certificado SSL/TLS sea necesario en un sitio web:

- AUTENTIFICACIÓN: El certificado SSL/TLS permite probar la identidad de la persona u organización (servidor) para que los usuarios se sientan seguros de con quién están tratando, pues un servidor cualquiera puede robar la información de los usuarios.

- CONFIANZA: Este está enfocado en los sitios de comercio electrónico o páginas en donde se solicite información importante para los usuarios, pues es necesario generar vínculos de confianza. Utilizando el certificado, se muestra de forma visual la efectividad que este tiene y se genera la confianza requerida.

- ESTÁNDARES DE LA INDUSTRIA: Dentro de las industrias destaca la financiera, en donde es necesario desarrollar niveles básicos de seguridad, asi como lineamientos de la industria de PCI (Tarjetas de pago) pues se tiene que aceptar información de tarjetas de crédito en las páginas web y para ello un requisito esencial es el uso de un certificado SSL/TLS.
## ¿Cómo se utiliza?

Los certificados SSL/TLS asocian de manera digital una clave criptográfica a toda la información de identificación de una compañía para así poder cifrar todas las transferencias de datos a manera de que no puedan ser interpretadas por terceras personas.

El protocolo TLS funciona teniendo una clave pública, una privada y claves de sesión para cada sesión segura única. Al momento de que se tiene una dirección con seguridad HTTPS en el navegador web o se navega de manera segura a través de una página, el navegador y el servidor web se encuentran conectados.

![Docs Version Dropdown](/img/web-security/TLS.png)

En las conexiones iniciales, las claves públicas y privadas son utilizadas para que se cree una clase de sesión, la cual posteriormente servirá para cifrar y descifrar los datos que fueron o son transferidos. La clave de sesión será válida por un tiempo limitado y únicamente podrá ser utilizada en y para esa sesión en particular.

Es muy fácil identificar si una página cuenta con un certificado, pues debe de tener una barra verde en la parte superior del navegador, la cual se puede hacer clic en dicho ícono y así poder ver la información acerca del certificado y poder administrar la configuración SSL.