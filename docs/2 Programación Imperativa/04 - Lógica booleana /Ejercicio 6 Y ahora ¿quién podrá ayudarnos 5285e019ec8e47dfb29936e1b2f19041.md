# Ejercicio 6: Y ahora... ¿quién podrá ayudarnos?

Created: July 3, 2022 4:54 PM

```jsx
function esFinDeSemana(dia) {
  return dia === "sábado" || dia === "domingo"
}

function estaCerrado(esFeriado, dia, horario) {
  return esFeriado || esFinDeSemana(dia) || !dentroDeHorarioBancario(horario);

}
```