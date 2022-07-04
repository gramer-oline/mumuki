# Ejercicio 8: Más Cartelitos

Created: July 3, 2022 4:23 PM

```jsx
function escribirCartelito (titulo, nombre, apellido, quiereCartelCorto) {
  
  if (quiereCartelCorto) {
    return titulo + " " + apellido;
    
  } else {
    return titulo + " " + nombre + " " + apellido;
  }  
}
```