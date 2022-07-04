# Ejercicio 3: Todas las ganancias, la ganancia

Created: July 3, 2022 5:10 PM

```jsx
unction gananciaTotal4(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = balancesDeUnPeriodo[0].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[1].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[2].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[3].ganancia;
  return sumatoria;
}
```