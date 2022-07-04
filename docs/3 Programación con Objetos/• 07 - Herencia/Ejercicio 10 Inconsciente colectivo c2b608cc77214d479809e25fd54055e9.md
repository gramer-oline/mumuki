# Ejercicio 10: Inconsciente colectivo

Created: July 3, 2022 6:52 PM

```ruby
class Colectivo < MedioDeTransporte
  def initialize
    @combustible=100
      @pasajeros=0  
  end
  
  def combustible
@combustible
end  
  def pasajeros
  @pasajeros
  end
  def entran? (personas)
personas <=maximo_personas
end
  def maximo_personas
        35
    end

    def recorrer!(kilometros)
       @combustible-=kilometros*2
    end
end
```