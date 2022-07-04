# Ejercicio 13: Los mejores meses del año

Created: July 3, 2022 5:18 PM

```jsx
function meses(registro) {
  let listameses = [];
  for (let meses of registro) {
    agregar(listameses, meses.mes)
  }
  return listameses
}

function afortunados(balancesDeUnPeriodo){
 let afortunados = [];
  for (let balance of balancesDeUnPeriodo) {
    if(balance.ganancia > 1000){
      agregar(afortunados, balance)
    }
  }
  return afortunados;
}

function mesesAfortunados(balancesDeUnPeriodo){
 return meses(afortunados(balancesDeUnPeriodo))
}
```