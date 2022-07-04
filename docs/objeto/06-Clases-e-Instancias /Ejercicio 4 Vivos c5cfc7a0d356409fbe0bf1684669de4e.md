# Ejercicio 4: ¡¿Vivos?!

Created: July 3, 2022 6:34 PM

```ruby
module Bouba
  @salud = 100
  def self.salud
    @salud
  end
  def self.recibir_danio!(puntos)
    @salud = [salud - (puntos)*2, 0].max
  end
  def self.gritar
    "¡agrrrg!"
  end
  def self.sabe_correr?
    false
  end
  def self.sin_vida?
    @salud == 0
  end
end
module Kiki
  @salud = 100
  def self.salud
    @salud
  end
  def self.recibir_danio!(puntos)
    @salud = [salud - (puntos)*2, 0].max
  end
  def self.gritar
    "¡agrrrg!"
  end
  def self.sabe_correr?
    false
  end
  def self.sin_vida?
    @salud == 0
  end
end
```