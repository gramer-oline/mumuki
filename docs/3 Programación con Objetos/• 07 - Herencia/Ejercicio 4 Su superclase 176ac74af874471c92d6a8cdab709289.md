# Ejercicio 4: Su superclase

Created: July 3, 2022 6:47 PM

```ruby
class  Dispositivo
    def initialize
    @bateria = 100
  end

  def cargar_a_tope!
    @bateria = 100
  end
end

class Celular < Dispositivo

  def bateria!
    @bateria
  end
  def utilizar!(minutos)
    @bateria = @bateria-minutos/2
  end
end

class Notebook < Dispositivo

  def bateria!
    @bateria
  end
  def utilizar!(minutos)
    @bateria = @bateria-minutos
  end
end
```