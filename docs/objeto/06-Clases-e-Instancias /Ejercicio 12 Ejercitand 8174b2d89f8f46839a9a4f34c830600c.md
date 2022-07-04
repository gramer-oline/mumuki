# Ejercicio 12: Ejercitand

Created: July 3, 2022 6:39 PM

```ruby
class Sobreviviente
  def initialize
    @energia = 1000
  end

  def energia
    @energia
  end
  
  def atacar!(zombie, danio)
    zombie.recibir_danio!(danio)
  end
  
  def ataque_masivo!(zombis)
    @energia /= 2
    zombis.each { |zombi| atacar!(zombi, 15) }
  end
  
  def beber!
    @energia *= 1.25
  end
end

```