"use strict";(self.webpackChunkproyecto_final_redes=self.webpackChunkproyecto_final_redes||[]).push([[738],{3905:function(e,n,o){o.d(n,{Zo:function(){return u},kt:function(){return m}});var r=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=r.createContext({}),l=function(e){var n=r.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(o),m=t,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return o?r.createElement(f,i(i({ref:n},u),{},{components:o})):r.createElement(f,i({ref:n},u))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2998:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=o(7462),t=o(3366),a=(o(7294),o(3905)),i=["components"],c={sidebar_position:1},s="Programaci\xf3n de aplicaciones con sockets",l={unversionedId:"sockets-application-programming/page1",id:"sockets-application-programming/page1",isDocsHomePage:!1,title:"Programaci\xf3n de aplicaciones con sockets",description:"\xbfQu\xe9 son los sockets?",source:"@site/docs/sockets-application-programming/page1.md",sourceDirName:"sockets-application-programming",slug:"/sockets-application-programming/page1",permalink:"/proyecto-final-redes/docs/sockets-application-programming/page1",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Con\xf3cenos \ud83d\udc4b",permalink:"/proyecto-final-redes/docs/meet-us"},next:{title:"Arquitectura cliente-servidor",permalink:"/proyecto-final-redes/docs/sockets-application-programming/page2"}},u=[{value:"\xbfQu\xe9 son los sockets?",id:"qu\xe9-son-los-sockets",children:[],level:2},{value:"\xbfComo se establece la comunicaci\xf3n con los sockets?",id:"como-se-establece-la-comunicaci\xf3n-con-los-sockets",children:[{value:"Orientado a conexi\xf3n",id:"orientado-a-conexi\xf3n",children:[],level:3},{value:"Orientado a no conexi\xf3n",id:"orientado-a-no-conexi\xf3n",children:[],level:3}],level:2}],d={toc:u};function p(e){var n=e.components,c=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"programaci\xf3n-de-aplicaciones-con-sockets"},"Programaci\xf3n de aplicaciones con sockets"),(0,a.kt)("h2",{id:"qu\xe9-son-los-sockets"},"\xbfQu\xe9 son los sockets?"),(0,a.kt)("p",null,"Es importantes antes de comenzar a hablar de la programaci\xf3n de aplicaciones con Sockets, saber qu\xe9 son, debido a que podemos encontrar diferentes definiciones, mencionaremos algunas de ellas: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Los sockets son un m\xe9todo de comunicaci\xf3n entre un programa de cliente y uno de servidor a trav\xe9s de una red. Un socket se define como \u201cel extremo de una conexi\xf3n\u201d. "),(0,a.kt)("li",{parentName:"ul"},"Un socket, es un m\xe9todo para la comunicaci\xf3n entre un programa del cliente y un programa del servidor en una red. Los sockets se crean y se utilizan con un sistema de peticiones o de llamadas de funci\xf3n a veces llamados interfaz de programaci\xf3n de aplicaci\xf3n de sockets (API). "),(0,a.kt)("li",{parentName:"ul"},"Un socket es tambi\xe9n una direcci\xf3n de Internet, combinando una direcci\xf3n IP y un n\xfamero de puerto  Un socket es un punto final de un enlace de comunicaci\xf3n de dos v\xedas entre dos programas que se ejecutan a trav\xe9s de la red.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:o(375).Z})),(0,a.kt)("h2",{id:"como-se-establece-la-comunicaci\xf3n-con-los-sockets"},"\xbfComo se establece la comunicaci\xf3n con los sockets?"),(0,a.kt)("p",null,"Como se menciona en el punto anterior, podemos verlos como cliente y servidor aquellos que tendr\xe1n una comunicaci\xf3n, y es por ello que deben ponerse de acuerdo sobre el protocolo que utilizar\xe1n. Y para eso, hay dos tipos de socket de los que se hablar\xe1n a continuaci\xf3n:"),(0,a.kt)("h3",{id:"orientado-a-conexi\xf3n"},"Orientado a conexi\xf3n"),(0,a.kt)("p",null,"Tambi\xe9n llamado socket TCP, este establece un camino virtual entre servidor y cliente, fiable, sin p\xe9rdidas de informaci\xf3n ni duplicados, la informaci\xf3n llega en el mismo orden que se env\xeda. El cliente abre una sesi\xf3n en el servidor y este guarda un estado del cliente."),(0,a.kt)("p",null,"El cliente debe contactar al servidor:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"El proceso servidor debe correr primero "),(0,a.kt)("li",{parentName:"ul"},"El servidor debe haber creado alg\xfan socket (puerta) que reciba conexiones de clientes ")),(0,a.kt)("p",null,"El cliente contacta al servidor mediante: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Crear un socket TCP local al cliente "),(0,a.kt)("li",{parentName:"ul"},"Especificar la direcci\xf3n IP, el puerto del proceso servidor")),(0,a.kt)("h3",{id:"orientado-a-no-conexi\xf3n"},"Orientado a no conexi\xf3n"),(0,a.kt)("p",null,"Tambi\xe9n conocida como socket UDP, esta se encarga del env\xedo de datagramas de tama\xf1o fijo. No es fiable, puede haber p\xe9rdidas de informaci\xf3n y duplicados, y la informaci\xf3n puede llegar en distinto orden del que se env\xeda. No se guarda ning\xfan estado del cliente en el servidor, por ello, es m\xe1s tolerante a fallos del sistema.\nLos sockets no son m\xe1s que puntos o mecanismos de comunicaci\xf3n entre procesos que permiten que un proceso hable (emita o reciba informaci\xf3n) con otro proceso incluso estando estos procesos en distintas m\xe1quinas. Esta caracter\xedstica de interconectividad entre m\xe1quinas hace que el concepto de socket nos sirva de gran utilidad.\nUn socket es al sistema de comunicaci\xf3n entre computadores, lo que un buz\xf3n o un tel\xe9fono es al sistema de comunicaci\xf3n entre personas: un punto de comunicaci\xf3n entre dos agentes (procesos o personas respectivamente) por el cual se puede emitir o recibir informaci\xf3n."))}p.isMDXComponent=!0},375:function(e,n,o){n.Z=o.p+"assets/images/sockets-0613e4a013da3db7c94fc18fc7979b91.png"}}]);