# Ejercicio 1: Zombi caminante

Created: July 3, 2022 6:32 PM

```ruby
module Bouba
  @salud = 100

  def self.gritar
    @gritar = "¡agrrrg!"
  end

  def self.salud
    @salud
  end

  def self.sabe_correr?
    false
  end

  def self.recibir_danio!(puntos)
    @salud = [@salud - puntos * 2, 0].max
  end
end
```