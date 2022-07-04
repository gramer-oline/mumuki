# Ejercicio 8: Inicializando instancias

Created: July 3, 2022 6:37 PM

```ruby
class Sobreviviente
  def initialize
    @energia = 1000
  end
  
  def energia
    @energia
  end
  
  def atacar! (zombie, puntos)
  zombie.recibir_danio! (puntos)
end  
end

juliana = Sobreviviente.new
anastasia = Sobreviviente.new
```