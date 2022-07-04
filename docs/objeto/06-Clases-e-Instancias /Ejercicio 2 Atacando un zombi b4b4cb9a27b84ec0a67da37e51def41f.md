# Ejercicio 2: Atacando un zombi

Created: July 3, 2022 6:33 PM

```ruby
module Juliana
  @energia = 1000
  def self.energia
    @energia
  end
  def self.atacar!(zombie,danio)
    zombie.recibir_danio!(danio)
end
end
```