# Ejercicio 5: Clases

Created: July 3, 2022 6:35 PM

```ruby
class Zombi
  def initialize
    @salud = 100
  end
  
   def sabe_correr?
    false
  end

  def gritar
    @gritar="¡agrrrg!"
  end

  def salud
    @salud
  end

  def recibir_danio! (puntos)

    @salud=[0,@salud-puntos*2].max
  end

  def sin_vida?
    @salud==0
  end
 
  
end
```