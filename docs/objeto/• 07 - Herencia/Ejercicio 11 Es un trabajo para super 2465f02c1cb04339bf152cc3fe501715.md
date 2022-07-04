# Ejercicio 11: Es un trabajo para super

Created: July 3, 2022 6:53 PM

```ruby
class Colectivo < MedioDeTransporte
  def initialize
    @combustible = 100
    @pasajeros = 0
  end
  
  def combustible
      @combustible
  end
  def pasajeros
      @pasajeros
  end
  
  def maximo_personas
    20
  end
  def entran? personas
    personas >= maximo_personas
  end
  def cargar_combustible! cantidad
    super
    @pasajeros = 0
  end
end

```