# Ejercicio 9: A filtrar, a filtrar cada cosa en su lugar

Created: July 3, 2022 5:14 PM

```jsx
function balancesPositivos(balancesDeUnPeriodo) {
  let balances = [];
  for (let balance of balancesDeUnPeriodo) {
    if (balance.ganancia > 0) {
      agregar(balances, balance)
    }
  }
  return balances;
}
```