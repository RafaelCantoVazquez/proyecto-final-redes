"use strict";(self.webpackChunkproyecto_final_redes=self.webpackChunkproyecto_final_redes||[]).push([[387],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3139:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:3},l="Ejemplo",s={unversionedId:"sockets-application-programming/page3",id:"sockets-application-programming/page3",isDocsHomePage:!1,title:"Ejemplo",description:"Ejemplo aplicaci\xf3n cliente/servidor:",source:"@site/docs/sockets-application-programming/page3.md",sourceDirName:"sockets-application-programming",slug:"/sockets-application-programming/page3",permalink:"/proyecto-final-redes/docs/sockets-application-programming/page3",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Arquitectura cliente-servidor",permalink:"/proyecto-final-redes/docs/sockets-application-programming/page2"},next:{title:"Planeaci\xf3n estrat\xe9gica y defensas",permalink:"/proyecto-final-redes/docs/data-communication-security/page1"}},p=[{value:"Programaci\xf3n de sockets con TCP",id:"programaci\xf3n-de-sockets-con-tcp",children:[],level:3},{value:"Programaci\xf3n de sockets con UDP",id:"programaci\xf3n-de-sockets-con-udp",children:[],level:3},{value:"Videos complementarios",id:"videos-complementarios",children:[],level:2}],d={toc:p};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ejemplo"},"Ejemplo"),(0,a.kt)("p",null,"Ejemplo aplicaci\xf3n cliente/servidor:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"El cliente lee una l\xednea de la entrada est\xe1ndar (inFromUser stream) , y la env\xeda al servidor v\xeda el socket (outToServer stream) "),(0,a.kt)("li",{parentName:"ul"},"El servidor lee la l\xednea del desde el socket "),(0,a.kt)("li",{parentName:"ul"},"El servidor convierte la l\xednea en mayusculas y la env\xeda al cliente "),(0,a.kt)("li",{parentName:"ul"},"El cliente lee e imprime la l\xednea modificada desde el socket (inFromServer stream)")),(0,a.kt)("h3",{id:"programaci\xf3n-de-sockets-con-tcp"},"Programaci\xf3n de sockets con TCP"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Aplicaci\xf3n cliente/servidor con sockets TCP")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:r(1698).Z})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Interacci\xf3n de aplicaci\xf3n cliente/servidor con sockets TCP")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:r(2400).Z})),(0,a.kt)("h3",{id:"programaci\xf3n-de-sockets-con-udp"},"Programaci\xf3n de sockets con UDP"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Aplicaci\xf3n cliente/servidor con sockets UDP")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:r(6200).Z})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Interacci\xf3n de aplicaci\xf3n cliente/servidor con sockets UDP")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:r(4625).Z})),(0,a.kt)("h2",{id:"videos-complementarios"},"Videos complementarios"),(0,a.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/7f9NzvvPo9g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0},1698:function(e,t,r){t.Z=r.p+"assets/images/Ejemplo1-050ee6d67daf97dad669177932faebc5.JPG"},2400:function(e,t,r){t.Z=r.p+"assets/images/Ejemplo2-ee350294ee66eafec325aa1332f8cd05.JPG"},6200:function(e,t,r){t.Z=r.p+"assets/images/Ejemplo3-f74871bbf3cd4e2e89dedf906f29b0bb.JPG"},4625:function(e,t,r){t.Z=r.p+"assets/images/Ejemplo4-380d9e77611049e571a7cf73a6342afd.JPG"}}]);