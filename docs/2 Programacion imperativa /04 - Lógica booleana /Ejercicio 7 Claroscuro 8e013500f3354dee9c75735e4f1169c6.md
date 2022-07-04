# Ejercicio 7: Claroscuro

Created: July 3, 2022 4:55 PM

```jsx
function tieneContraste(colorletra, colorfondo) {
  return esTonoClaro(colorletra) && !esTonoClaro(colorfondo) || !esTonoClaro(colorletra) && esTonoClaro(colorfondo);
}
```