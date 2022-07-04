# Ejercicio 1: Aflojá con el aparatito

Created: July 3, 2022 6:44 PM

```ruby
class Celular
  def initialize
    @bateria=100
  end

  def bateria!
    @bateria
  end

  def utilizar!(minutos)
    @bateria = @bateria - (minutos/2)
      end

  def cargar_a_tope!
    @bateria = 100
  end
end
```