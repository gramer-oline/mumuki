"use strict";(self.webpackChunkmumuky=self.webpackChunkmumuky||[]).push([[3306],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,p=m["".concat(s,".").concat(f)]||m[f]||d[f]||o;return r?t.createElement(p,i(i({ref:n},u),{},{components:r})):t.createElement(p,i({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},725:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const o={},i="Ejercicio 3: Otro zombi caminante",c={unversionedId:"3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 3 Otro zombi caminante 62e19e01215a41e69d3415001925fedd",id:"3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 3 Otro zombi caminante 62e19e01215a41e69d3415001925fedd",title:"Ejercicio 3: Otro zombi caminante",description:"Created34 PM",source:"@site/docs/3 Programaci\xf3n con Objetos/06-Clases-e-Instancias /Ejercicio 3 Otro zombi caminante 62e19e01215a41e69d3415001925fedd.md",sourceDirName:"3 Programaci\xf3n con Objetos/06-Clases-e-Instancias ",slug:"/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 3 Otro zombi caminante 62e19e01215a41e69d3415001925fedd",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 3 Otro zombi caminante 62e19e01215a41e69d3415001925fedd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3 Programaci\xf3n con Objetos/06-Clases-e-Instancias /Ejercicio 3 Otro zombi caminante 62e19e01215a41e69d3415001925fedd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ejercicio 2: Atacando un zombi",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 2 Atacando un zombi b4b4cb9a27b84ec0a67da37e51def41f"},next:{title:"Ejercicio 4: \xa1\xbfVivos?!",permalink:"/mumuki/3 Programaci\xf3n con Objetos/Clases-e-Instancias /Ejercicio 4 Vivos c5cfc7a0d356409fbe0bf1684669de4e"}},s={},l=[],u={toc:l};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ejercicio-3-otro-zombi-caminante"},"Ejercicio 3: Otro zombi caminante"),(0,a.kt)("p",null,"Created: July 3, 2022 6:34 PM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'module Bouba\n  @salud = 100\n  \n  def self.gritar\n    @gritar = "\xa1agrrrg!"\n  end\n  \n  def self.salud\n    @salud\n  end\n  \n  def self.sabe_correr?\n    false\n  end\n  \n  def self.recibir_danio!(puntos)\n    @salud = [@salud - puntos * 2, 0].max\n  end\nend  \n\nmodule Kiki\n  @salud = 100\n  \n  def self.gritar\n    @gritar = "\xa1agrrrg!"\n  end\n  \n  def self.salud\n    @salud\n  end\n  \n  def self.sabe_correr?\n    false\n  end\n  \n  def self.recibir_danio!(puntos)\n    @salud = [@salud - puntos * 2, 0].max\n  end\nend\n')))}d.isMDXComponent=!0}}]);