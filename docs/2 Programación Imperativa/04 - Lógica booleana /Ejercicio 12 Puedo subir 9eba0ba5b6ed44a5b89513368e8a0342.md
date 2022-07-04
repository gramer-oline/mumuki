# Ejercicio 12: ¿Puedo subir?

Created: July 3, 2022 4:57 PM

```jsx
function puedeSubirse(altura, acom, afeccion) {
  return altura >= 1.5 && !afeccion || altura >= 1.2 && acom && !afeccion
}
```