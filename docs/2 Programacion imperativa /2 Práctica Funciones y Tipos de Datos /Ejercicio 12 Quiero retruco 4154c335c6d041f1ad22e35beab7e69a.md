# Ejercicio 12: ¡Quiero retruco!

Created: July 3, 2022 4:26 PM

```jsx
function puntosDeEnvidoTotales(carta1, palo1, carta2, palo2) {
  if (palo1 === palo2){
    return valorEnvido(carta1) + valorEnvido(carta2) +20;
  } else {
    return Math.max(valorEnvido(carta1), valorEnvido(carta2));
  }
}
```