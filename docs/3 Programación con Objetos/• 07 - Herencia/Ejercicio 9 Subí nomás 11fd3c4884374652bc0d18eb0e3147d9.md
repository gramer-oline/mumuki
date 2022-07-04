# Ejercicio 9: Subí nomás

Created: July 3, 2022 6:52 PM

```ruby
class MedioDeTransporte
    def initialize(combustible)
        
    end
  
    def initialize (combustible)
    @combustible = combustible
    end

    def cargar_combustible!(combustible)
        @combustible += combustible
    end

    def entran?(pasajeros)
        personas<=maximo_pasajeros!
    end

    def entran?(personas)
    personas <= self.maximo_personas
  end
end

class Colectivo < MedioDeTransporte
    def maximo_personas
        20
    end
  
    def recorrer!(kilometros)
        @combustible= @combustible-kilometros*2
    end
end
```