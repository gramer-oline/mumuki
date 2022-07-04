# Ejercicio 11: El viejo y querido map

Created: July 3, 2022 6:29 PM

```ruby
module Juegoteca
@juegos = [CarlosDuty, TimbaElLeon, Metroide]
 def self.juegos
    @juegos
  end
 def self.juegos_violentos
 @juegos.select {|un_juego| un_juego.violento?}
 end
  def self.dificultad_violenta
    juegos_violentos.map {|juegos_violentos| juegos_violentos.dificultad}
  end
end
```