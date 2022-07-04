"use strict";(self.webpackChunkmumuky=self.webpackChunkmumuky||[]).push([[6472],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>b});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),l=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(a),b=t,d=p["".concat(s,".").concat(b)]||p[b]||f[b]||i;return a?r.createElement(d,c(c({ref:n},u),{},{components:a})):r.createElement(d,c({ref:n},u))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2680:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(7462),t=(a(7294),a(3905));const i={},c="Ejercicio 8: Inicializando instancias",o={unversionedId:"3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 8 Inicializando instancias 8fb89381ec72446a8dc5ba286193f23a",id:"3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 8 Inicializando instancias 8fb89381ec72446a8dc5ba286193f23a",title:"Ejercicio 8: Inicializando instancias",description:"Created37 PM",source:"@site/docs/3 Programaci\xf3n con Objetos/06-Clases-e-Instancias /Ejercicio 8 Inicializando instancias 8fb89381ec72446a8dc5ba286193f23a.md",sourceDirName:"3 Programaci\xf3n con Objetos/06-Clases-e-Instancias ",slug:"/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 8 Inicializando instancias 8fb89381ec72446a8dc5ba286193f23a",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 8 Inicializando instancias 8fb89381ec72446a8dc5ba286193f23a",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3 Programaci\xf3n con Objetos/06-Clases-e-Instancias /Ejercicio 8 Inicializando instancias 8fb89381ec72446a8dc5ba286193f23a.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ejercicio 6: Instancia",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 6 Instancia 736fb7bbf8254ba7bcaab46d1b59ff2f"},next:{title:"Ejercicio 9: Ahora s\xed: invasi\xf3n",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 9 Ahora s\xed invasi\xf3n c870dc54b5754f2982e1c88db8e3cdfc"}},s={},l=[],u={toc:l};function f(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"ejercicio-8-inicializando-instancias"},"Ejercicio 8: Inicializando instancias"),(0,t.kt)("p",null,"Created: July 3, 2022 6:37 PM"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ruby"},"class Sobreviviente\n  def initialize\n    @energia = 1000\n  end\n  \n  def energia\n    @energia\n  end\n  \n  def atacar! (zombie, puntos)\n  zombie.recibir_danio! (puntos)\nend  \nend\n\njuliana = Sobreviviente.new\nanastasia = Sobreviviente.new\n")))}f.isMDXComponent=!0}}]);