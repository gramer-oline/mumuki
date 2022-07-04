# Ejercicio 13: Jugando a tod

Created: July 3, 2022 6:31 PM

```ruby
module Juegoteca
  @juegos=[CarlosDuty, TimbaElLeon, Metroide]

def self.juegos
  @juegos
end

   def self.jugar_a_todo!
    juegos.each { |un_juego| un_juego.jugar!(5)}
  end
end

```