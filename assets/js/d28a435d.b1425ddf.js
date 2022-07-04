"use strict";(self.webpackChunkmumuky=self.webpackChunkmumuky||[]).push([[9141],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>p});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,b=m["".concat(s,".").concat(p)]||m[p]||l[p]||c;return r?t.createElement(b,o(o({ref:n},u),{},{components:r})):t.createElement(b,o({ref:n},u))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4985:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=r(7462),a=(r(7294),r(3905));const c={},o="Ejercicio 14: Concretemos la herencia",i={unversionedId:"3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 14 Concretemos la herencia ce08353b434043c49e82ca3e2db091d5",id:"3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 14 Concretemos la herencia ce08353b434043c49e82ca3e2db091d5",title:"Ejercicio 14: Concretemos la herencia",description:"Created55 PM",source:"@site/docs/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 14 Concretemos la herencia ce08353b434043c49e82ca3e2db091d5.md",sourceDirName:"3 Programaci\xf3n con Objetos/\u2022 07 - Herencia",slug:"/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 14 Concretemos la herencia ce08353b434043c49e82ca3e2db091d5",permalink:"/mumuki/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 14 Concretemos la herencia ce08353b434043c49e82ca3e2db091d5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 14 Concretemos la herencia ce08353b434043c49e82ca3e2db091d5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ejercicio 13: Herencia zombie",permalink:"/mumuki/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 13 Herencia zombie 9d3801d4c9374d1f99d66b4b86a06b5c"},next:{title:"Ejercicio 15: La defensa",permalink:"/mumuki/3 Programaci\xf3n con Objetos/\u2022 07 - Herencia/Ejercicio 15 La defensa ba28755f52004d8cbfd0afaf4959de3e"}},s={},d=[],u={toc:d};function l(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ejercicio-14-concretemos-la-herencia"},"Ejercicio 14: Concretemos la herencia"),(0,a.kt)("p",null,"Created: July 3, 2022 6:55 PM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class Zombi \n  def initialize(salud_inicial)\n    @salud = salud_inicial\n  end\n  \n  def descansar!(minutos)\n    @salud+=minutos\n  end\n  \n  def salud\n    @salud\n  end\n  \n  def gritar\n    "\xa1agrrrg!"\n  end\n  \n  def sabe_correr?\n    false\n  end\n  \n  def sin_vida?\n    @salud == 0\n  end\n  \n  def recibir_danio!(puntos)\n    @salud = [@salud - puntos * 2, 0].max\n  end\nend\n\nclass SuperZombi < Zombi\n  def sabe_correr?\n    true\n  end\n\n  def recibir_danio!(puntos)\n    @salud=[@salud -puntos * 3, 0].max\n  end\n\n  def regenerarse!\n    @salud=100\n  end\n\n  def sabe_correr?\n    true\n  end\n\n  def recibir_danio!(puntos)\n    @salud = [@salud - puntos * 3, 0].max\n  end\n  \n  def regenerarse!\n    @salud = 100\n  end\nend\n')))}l.isMDXComponent=!0}}]);