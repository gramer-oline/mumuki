# Ejercicio 9: El que busca encuentra

Created: July 3, 2022 6:28 PM

```ruby
module Juegoteca
  @juegos = [CarlosDuty,TimbaElLeon,Metroide]
  
  def self.juegos
    @juegos
  end
   def self.juego_mas_dificil_que(una_dificultad)
   @juegos.find {|un_juego|un_juego.dificultad>una_dificultad}
end
end
```