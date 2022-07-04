# Ejercicio 1: Entrando en Calor

Created: July 3, 2022 6:21 PM

```ruby
module CarlosDuty
  @cantidad_logros = 0
  def self.cantidad_logros
    @cantidad_logros
  end
  def self.violento?
    true
  end
  def self.dificultad
  30-@cantidad_logros * 0.5
  end
  def self.jugar! (un_tiempo)
    if (un_tiempo > 2)
     @cantidad_logros += 1
     dificultad = (@cantidad_logros * 0.5 - 30).abs
    end
  end
end

module TimbaElLeon
  @dificultad = 25
 def self.dificultad
  @dificultad
 end
 def self.violento?
   false
 end
 def self.jugar! (un_tiempo)
   @dificultad += un_tiempo
end
end

module Metroide
  @nivel_espacial = 3

 def self.dificultad
  dificultad = 100
 end
 def self.nivel_espacial
   @nivel_espacial
 end
 def self.jugar! (un_tiempo)
   @nivel_espacial += 1
 end
 def self.violento?
   nivel_espacial > 5
 end
end
```