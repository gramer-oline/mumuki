# Ejercicio 11: Súper zombi

Created: July 3, 2022 6:39 PM

```ruby
class SuperZombi
  def initialize(vida)
    @salud = vida
  end
  
  def salud
    @salud
  end
  
  def recibir_danio!(puntos_de_danio)
    @salud = [@salud - (3*puntos_de_danio),0].max
  end
  
  def sabe_correr?
    true
  end
  
  def gritar
    "¡agrrrg!"
  end
  
  def sin_vida?
    @salud === 0
  end
  
  def regenerarse! 
      @salud = 100
  end
end

```