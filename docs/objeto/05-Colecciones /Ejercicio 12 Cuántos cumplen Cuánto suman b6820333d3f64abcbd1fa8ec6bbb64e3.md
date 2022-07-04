# Ejercicio 12: ¿Cuántos cumplen? ¿Cuánto suman?

Created: July 3, 2022 6:30 PM

```ruby
module Juegoteca
  @juegos = [CarlosDuty ,TimbaElLeon, Metroide]
  
  def self.juegos
    @juegos
  end

  def self.juegos_violentos
    self.juegos.select { |juego| juego.violento? }
  end
  
  def self.promedio_de_violencia
    self.juegos_violentos.sum{|juego| juego.dificultad}/self.juegos_violentos.count
  end
end

```