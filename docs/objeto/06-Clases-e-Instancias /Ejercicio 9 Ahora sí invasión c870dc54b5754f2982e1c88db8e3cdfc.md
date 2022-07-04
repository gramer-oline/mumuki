# Ejercicio 9: Ahora sí: invasión

Created: July 3, 2022 6:37 PM

```ruby
class Sobreviviente
  def initialize
  @energia = 1000
  end
  def energia
    @energia
  end
  def atacar!(zombi,danio)
    zombi.recibir_danio!(danio)
  end
  def ataque_masivo!(caminantes)
    caminantes.each{|zombi| self.atacar!(zombi, 15)}
  end
end

juliana = Sobreviviente.new
anastasia = Sobreviviente.new

caminantes = []
20.times {caminantes.push(Zombi.new)}
```