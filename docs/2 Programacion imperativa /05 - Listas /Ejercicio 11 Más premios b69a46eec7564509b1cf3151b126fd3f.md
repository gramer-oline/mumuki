# Ejercicio 11: Más premios

Created: July 3, 2022 5:01 PM

```jsx
let medallas= ["oro","plata","bronce"];

function medallaSegunPuesto(puesto) {
  if (puesto >= 1 && puesto <= 3){
    return medallas [puesto-1];
  } else {
    return "nada";
  }
}
```