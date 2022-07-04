# Ejercicio 9: Cartelitos óptimos

Created: July 3, 2022 4:24 PM

```jsx
function escribirCartelitoOptimo(titulo, nombre, apellido) {
    return escribirCartelito(titulo, nombre, apellido, longitud(nombre + apellido) > 15)
  
}
```