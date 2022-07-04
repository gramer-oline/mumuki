# Ejercicio 10: Un promedio más positivo

Created: July 3, 2022 5:15 PM

```jsx
function gananciasDeBalancesPositivos(balancesDeUnPeriodo) {
  return ganancias(balancesPositivos(balancesDeUnPeriodo))
}

function promedioDeBalancesPositivos(balancesDeUnPeriodo) {
  return promedio(ganancias(balancesPositivos(balancesDeUnPeriodo)))
}
```