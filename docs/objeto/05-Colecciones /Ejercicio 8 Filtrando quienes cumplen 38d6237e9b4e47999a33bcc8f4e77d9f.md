# Ejercicio 8: Filtrando quienes cumplen

Created: July 3, 2022 6:27 PM

```ruby
module Juegoteca
  @juegos = [CarlosDuty, TimbaElLeon, Metroide]
  def self.juegos
    @juegos
  end
  def self.juegos_violentos
    juegos_violentos = @juegos.select {|un_juego| un_juego.violento? }
  end
end
```