"use strict";(self.webpackChunkmumuky=self.webpackChunkmumuky||[]).push([[9888],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return r?t.createElement(f,i(i({ref:n},s),{},{components:r})):t.createElement(f,i({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4090:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const c={},i="Ejercicio 8: Filtrando quienes cumplen",a={unversionedId:"3 Programaci\xf3n con Objetos/Colecciones /Ejercicio 8 Filtrando quienes cumplen 38d6237e9b4e47999a33bcc8f4e77d9f",id:"3 Programaci\xf3n con Objetos/Colecciones /Ejercicio 8 Filtrando quienes cumplen 38d6237e9b4e47999a33bcc8f4e77d9f",title:"Ejercicio 8: Filtrando quienes cumplen",description:"Created27 PM",source:"@site/docs/3 Programaci\xf3n con Objetos/05-Colecciones /Ejercicio 8 Filtrando quienes cumplen 38d6237e9b4e47999a33bcc8f4e77d9f.md",sourceDirName:"3 Programaci\xf3n con Objetos/05-Colecciones ",slug:"/3 Programaci\xf3n con Objetos/Colecciones /Ejercicio 8 Filtrando quienes cumplen 38d6237e9b4e47999a33bcc8f4e77d9f",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Colecciones /Ejercicio 8 Filtrando quienes cumplen 38d6237e9b4e47999a33bcc8f4e77d9f",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3 Programaci\xf3n con Objetos/05-Colecciones /Ejercicio 8 Filtrando quienes cumplen 38d6237e9b4e47999a33bcc8f4e77d9f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ejercicio 7: Bloques con par\xe1metros",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Colecciones /Ejercicio 7 Bloques con par\xe1metros 3e27ca2d9b514a4e9e95121841e0d823"},next:{title:"Ejercicio 9: El que busca encuentra",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Colecciones /Ejercicio 9 El que busca encuentra a062734ccdda48198f10d2c77a4aba2a"}},u={},l=[],s={toc:l};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ejercicio-8-filtrando-quienes-cumplen"},"Ejercicio 8: Filtrando quienes cumplen"),(0,o.kt)("p",null,"Created: July 3, 2022 6:27 PM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"module Juegoteca\n  @juegos = [CarlosDuty, TimbaElLeon, Metroide]\n  def self.juegos\n    @juegos\n  end\n  def self.juegos_violentos\n    juegos_violentos = @juegos.select {|un_juego| un_juego.violento? }\n  end\nend\n")))}p.isMDXComponent=!0}}]);