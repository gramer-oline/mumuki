"use strict";(self.webpackChunkmumuky=self.webpackChunkmumuky||[]).push([[4876],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7294);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),d=c,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function d(e,n){var r=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8883:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(7462),c=(r(7294),r(3905));const o={},i="Ejercicio 10: Inconsciente colectivo",a={unversionedId:"3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 10 Inconsciente colectivo c2b608cc77214d479809e25fd54055e9",id:"3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 10 Inconsciente colectivo c2b608cc77214d479809e25fd54055e9",title:"Ejercicio 10: Inconsciente colectivo",description:"Created52 PM",source:"@site/docs/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 10 Inconsciente colectivo c2b608cc77214d479809e25fd54055e9.md",sourceDirName:"3 Programaci\xf3n con Objetos/\u2022 07 - Herencia",slug:"/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 10 Inconsciente colectivo c2b608cc77214d479809e25fd54055e9",permalink:"/mumuki/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 10 Inconsciente colectivo c2b608cc77214d479809e25fd54055e9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 10 Inconsciente colectivo c2b608cc77214d479809e25fd54055e9.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ejercicio 1: Afloj\xe1 con el aparatito",permalink:"/mumuki/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 1 Afloj\xe1 con el aparatito 75f7801086d44dd3b554ca43087f011f"},next:{title:"Ejercicio 11: Es un trabajo para super",permalink:"/mumuki/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 11 Es un trabajo para super 2465f02c1cb04339bf152cc3fe501715"}},s={},l=[],u={toc:l};function p(e){let{components:n,...r}=e;return(0,c.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"ejercicio-10-inconsciente-colectivo"},"Ejercicio 10: Inconsciente colectivo"),(0,c.kt)("p",null,"Created: July 3, 2022 6:52 PM"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"class Colectivo < MedioDeTransporte\n  def initialize\n    @combustible=100\n      @pasajeros=0  \n  end\n  \n  def combustible\n@combustible\nend  \n  def pasajeros\n  @pasajeros\n  end\n  def entran? (personas)\npersonas <=maximo_personas\nend\n  def maximo_personas\n        35\n    end\n\n    def recorrer!(kilometros)\n       @combustible-=kilometros*2\n    end\nend\n")))}p.isMDXComponent=!0}}]);