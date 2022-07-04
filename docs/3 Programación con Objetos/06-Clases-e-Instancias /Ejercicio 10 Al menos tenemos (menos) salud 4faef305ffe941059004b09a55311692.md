# Ejercicio 10: Al menos tenemos (menos) salud

Created: July 3, 2022 6:38 PM

```ruby
class Zombi
  
  def initialize(salud)
    @salud= salud
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