"use strict";(self.webpackChunkproyecto_final_redes=self.webpackChunkproyecto_final_redes||[]).push([[209],{3905:function(e,n,o){o.d(n,{Zo:function(){return d},kt:function(){return m}});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return o?t.createElement(f,s(s({ref:n},d),{},{components:o})):t.createElement(f,s({ref:n},d))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3593:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var t=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],i={sidebar_position:3},l="Implementando IoT",c={unversionedId:"internet-of-things/page3",id:"internet-of-things/page3",isDocsHomePage:!1,title:"Implementando IoT",description:"\xbfC\xf3mo se implementa?",source:"@site/docs/internet-of-things/page3.md",sourceDirName:"internet-of-things",slug:"/internet-of-things/page3",permalink:"/proyecto-final-redes/docs/internet-of-things/page3",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Desaf\xedos en IoT",permalink:"/proyecto-final-redes/docs/internet-of-things/page2"}},d=[{value:"\xbfC\xf3mo se implementa?",id:"c\xf3mo-se-implementa",children:[],level:2},{value:"\xbfC\xf3mo funcionan los sensores?",id:"c\xf3mo-funcionan-los-sensores",children:[],level:2},{value:"\xbfD\xf3nde comienzan las redes?",id:"d\xf3nde-comienzan-las-redes",children:[],level:2},{value:"Videos complementarios",id:"videos-complementarios",children:[],level:2}],p={toc:d};function u(e){var n=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"implementando-iot"},"Implementando IoT"),(0,a.kt)("h2",{id:"c\xf3mo-se-implementa"},"\xbfC\xf3mo se implementa?"),(0,a.kt)("p",null,"Es importante saber qu\xe9 tecnolog\xeda usar para sacar m\xe1s provecho al proyecto a la hora de implementar IoT. En este sentido, teninendo esto en cuenta. Primero, los sensores, que son el dispositivo que recolecta los datos del ambiente y los transmite hacia el internet de las cosas. Segundo, las redes, que constituyen la forma como se conecta el sensor a Internet ya sea a trav\xe9s de WiFi, Ethernet o redes m\xf3viles (3G/4G/LTE/4.5G Narrowband). Tambi\xe9n hay algunos objetos que se comunican internamente de otra forma (Bluetooth / RF / Infrarrojo / protocolos propietarios) y al final llegan a un Concentrador o Gateway que es el que se conecta a Internet. Comprender estos diversos elementos resultan ser muy \xfatiles para implementar IoT."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.researchgate.net/profile/Natalia-Marinova/publication/318284317/figure/fig2/AS:513759652790272@1499501254906/IoT-technologies-and-applications-that-could-be-used-in-educational-process-Source.png",alt:"IoT"})),(0,a.kt)("h2",{id:"c\xf3mo-funcionan-los-sensores"},"\xbfC\xf3mo funcionan los sensores?"),(0,a.kt)("p",null,"Las nuevas tendencias en tecnolog\xeda facilitan a los fabricantes la producci\xf3n de sensores m\xe1s baratos, m\xe1s inteligentes y m\xe1s peque\xf1os, lo que impulsa el aumento del n\xfamero de sensores instalados por los proveedores de soluciones de IoT. Sin embargo, debido a los m\xfaltiples proveedores y tecnolog\xedas utilizadas, los sensores de IoT se enfrentan a problemas de interoperabilidad, consumo de energ\xeda, seguridad y privacidad."),(0,a.kt)("h2",{id:"d\xf3nde-comienzan-las-redes"},"\xbfD\xf3nde comienzan las redes?"),(0,a.kt)("p",null,"Algunos de los requisitos previos para la amplia adopci\xf3n de la tecnolog\xeda IoT es que las redes tengan una gran velocidad de datos, disponibilidad y un costo m\xe1s bajo en el uso de los datos, la virtualizaci\xf3n, etc. Las redes se utilizan para transmitir los datos recogidos por los sensores a trav\xe9s de las redes con diferentes componentes, incluidos los enrutadores y los puentes en las diferentes implantaciones de IoT. Actualmente, la conexi\xf3n de las diferentes partes de las redes con los sensores se realiza mediante diferentes tecnolog\xedas (por ejemplo, Wi-Fi, redes celulares). En cambio, la interconectividad fluida y la heterogeneidad de las redes, la disponibilidad de la cobertura de las redes, el consumo de energ\xeda, la seguridad, etc., siguen faltando dentro de un contexto marcado por el enorme crecimiento de los dispositivos conectados a IoT. Por lo cual es necesario considerarlo dentro de la implementaci\xf3n."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://rfpage.com/wp-content/uploads/2018/01/Key-IoT-Components.jpg",alt:"IoT"})),(0,a.kt)("h2",{id:"videos-complementarios"},"Videos complementarios"),(0,a.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/LlhmzVL5bm8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);