"use strict";(self.webpackChunkmumuky=self.webpackChunkmumuky||[]).push([[3914],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,p=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return r?t.createElement(p,s(s({ref:n},m),{},{components:r})):t.createElement(p,s({ref:n},m))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4604:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={},s="Ejercicio 10: Al menos tenemos (menos) salud",c={unversionedId:"3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 10 Al menos tenemos (menos) salud 4faef305ffe941059004b09a55311692",id:"3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 10 Al menos tenemos (menos) salud 4faef305ffe941059004b09a55311692",title:"Ejercicio 10: Al menos tenemos (menos) salud",description:"Created38 PM",source:"@site/docs/3 Programaci\xf3n con Objetos/06-Clases-e-Instancias /Ejercicio 10 Al menos tenemos (menos) salud 4faef305ffe941059004b09a55311692.md",sourceDirName:"3 Programaci\xf3n con Objetos/06-Clases-e-Instancias ",slug:"/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 10 Al menos tenemos (menos) salud 4faef305ffe941059004b09a55311692",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 10 Al menos tenemos (menos) salud 4faef305ffe941059004b09a55311692",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3 Programaci\xf3n con Objetos/06-Clases-e-Instancias /Ejercicio 10 Al menos tenemos (menos) salud 4faef305ffe941059004b09a55311692.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ejercicio 1: Zombi caminante",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 1 Zombi caminante 67abcce4165149b39b259342b0d25bf7"},next:{title:"Ejercicio 11: S\xfaper zombi",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 11 S\xfaper zombi cf294e13edc0486fa1b4929826eaac5c"}},i={},l=[],m={toc:l};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ejercicio-10-al-menos-tenemos-menos-salud"},"Ejercicio 10: Al menos tenemos (menos) salud"),(0,a.kt)("p",null,"Created: July 3, 2022 6:38 PM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class Zombi\n  \n  def initialize(salud)\n    @salud= salud\n  end\n  \n   def sabe_correr?\n    false\n  end\n\n  def gritar\n    @gritar="\xa1agrrrg!"\n  end\n\n  def salud\n    @salud\n  end\n\n  def recibir_danio! (puntos)\n\n    @salud=[0,@salud-puntos*2].max\n  end\n\n  def sin_vida?\n    @salud==0\n  end\nend\n\n')))}u.isMDXComponent=!0}}]);