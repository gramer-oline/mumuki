# Ejercicio 8: Soy el mapa, soy el mapa

Created: July 3, 2022 5:13 PM

```
function ganancias(balancesDeUnPeriodo) {
  let gananciasLista = [];
  for (let balance of balancesDeUnPeriodo) {
    agregar(gananciasLista, balance.ganancia)
  }
  return gananciasLista;
}
```