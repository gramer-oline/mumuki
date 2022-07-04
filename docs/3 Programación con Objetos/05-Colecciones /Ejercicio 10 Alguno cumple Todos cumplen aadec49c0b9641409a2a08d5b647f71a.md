# Ejercicio 10: ¿Alguno cumple? ¿Todos cumplen?

Created: July 3, 2022 6:28 PM

```ruby
module Juegoteca
  @juegos=[CarlosDuty,TimbaElLeon,Metroide ]
  def self.juegos 
   @juegos 
end
  def self.mucha_violencia?
    @juegos.all? {|juego|juego.violento?}
  end
  def self.muy_dificil?
    @juegos.any? {|juego|juego.dificultad>25}
  end
    
  end
```