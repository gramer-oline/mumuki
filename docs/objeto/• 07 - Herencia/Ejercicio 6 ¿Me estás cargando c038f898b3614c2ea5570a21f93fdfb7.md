# Ejercicio 6: ¿Me estás cargando?

Created: July 3, 2022 6:50 PM

```ruby
class  Dispositivo
    def initialize
    @bateria = 100
  end

  def cargar_a_tope!
    @bateria = 100
  end

  def descargado?
    @bateria <= 20
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