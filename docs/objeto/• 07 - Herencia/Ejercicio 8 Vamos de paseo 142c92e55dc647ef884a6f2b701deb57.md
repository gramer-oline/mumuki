# Ejercicio 8: Vamos de paseo

Created: July 3, 2022 6:50 PM

```ruby
class MedioDeTransporte
  def initialize(nafta)
    @combustible = nafta
  end
  
  def cargar_combustible!(litros)
    @combustible += litros
  end
  
  def entran?(personas)
    personas <= self.maximo_personas
  end
end

class Moto < MedioDeTransporte
  def recorrer!(km)
    @combustible -= km 
  end
  
  def maximo_personas
    2
  end
end

class Auto < MedioDeTransporte
  def recorrer!(km)
    @combustible -= km / 2
  end
  
  def maximo_personas
    5
  end
end
```