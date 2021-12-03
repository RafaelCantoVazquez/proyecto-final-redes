---
sidebar_position: 3
---

# IPSec y componentes

## IPSec, ¿qué es?

IPSec (Internet Protocol Security) es uno de los protocolos VPN más populares, gracias a su reconocida robustez y a su capacidad para operar a nivel de red, en simples palabras, es un conjunto de protocolos de seguridad en internet diseñado para proteger los paquetes de datos enviados a través de una red IP.

El conjunto de protocolos en el IPSec tienen como finalidad hacer más seguras las comunicaciones dentro del IP, autenticando y cifrando cada paquete del flujo de datos. Es un protocolo diseñado por la IETF, que se definió en el RFC4301. También incluye protocolos para establecer la autenticación mutua entre agentes al inicio de la sesión y la negociación de llaves criptográficas durante la sesión. IPSec puede ser usado para proteger flujos de datos entre un par de hosts, ya sean servidores o clientes, entre un par de puertas de enlace (gateway) de seguridad, ya sean firewalls o ruteadores, o entre una puerta de enlace un hosts. IPSec es un esquema de seguridad en modo dual, de punto a punto, operante en la capa 3 del modelo OSI.

## Componentes

Los protocolos que usa IPSec son:

- **IKE (Internet Key Exchange):** para llevar a cabo una asociación de seguridad (SA, security asociation) al llevar las negociaciones de los protocolos y algoritmos, además de generar las llaves de cifrado y autenticación que serán usadas por IPSec.

- **Encabezado de Autenticación (AH authentication header):** para proveer integridad y autenticación de origen de datos para los datagramas IP y para proveer protección contra los ataques de respuesta (reply attacks).

- **Encabezado de carga de seguridad de encapsulamiento (ESP encapsulating security payload):** para proveer confidencialidad, autenticación de origen de datos, integridad sin conexión (conectionless), un servicio anti-respuesta, un tipo de secuencia parcial de integridad y una limitada confidencialidad de flujo de tráfico. ESP también soporta configuraciones de sólo cifrado y sólo autenticación, aunque esto se desaconseja. A diferencia del encabezado de autenticación ESP no protege el encabezado de paquete IP. En el modo de túnel, donde el paquete completo original es encapsulado con un nuevo encabezado de paquete, la protección que ofrece ESP abarca a todo el paquete,incluyendo el encapsulado, mientras que el encabezado exterior continua sin protección.

## Videos complementarios

<iframe width="675" height="380" src="https://www.youtube.com/embed/a-sFus9PQ2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="675" height="380" src="https://www.youtube.com/embed/IzxC6UPilqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
