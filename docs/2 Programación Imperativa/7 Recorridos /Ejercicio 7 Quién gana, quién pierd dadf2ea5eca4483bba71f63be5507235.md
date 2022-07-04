# Ejercicio 7: Quién gana, quién pierd

Created: July 3, 2022 5:13 PM

```
 function gananciaPositiva (balancesPositivos) {
  let sumatoria = 0;
  for (let balance of balancesPositivos) {
    if (balance.ganancia > 0) {
      sumatoria = sumatoria + balance.ganancia
    }
  }
   return sumatoria
}

 function promedioGananciasPositivas (balances){
   return gananciaPositiva (balances) / cantidadDeBalancesPositivos (balances)
 }
```

```jsx

```