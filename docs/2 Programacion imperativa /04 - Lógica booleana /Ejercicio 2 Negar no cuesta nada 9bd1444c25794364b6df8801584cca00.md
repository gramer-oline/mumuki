# Ejercicio 2: Negar no cuesta nada

Created: July 3, 2022 4:53 PM

```jsx
function esMayorDeEdad(edad) {
  return edad >= 18;
}

function esMenorDeEdad(edad) {
  return !esMayorDeEdad(edad);
}
```