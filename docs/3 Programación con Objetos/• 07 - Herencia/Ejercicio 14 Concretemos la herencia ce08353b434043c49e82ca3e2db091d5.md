# Ejercicio 14: Concretemos la herencia

Created: July 3, 2022 6:55 PM

```ruby
class Zombi 
  def initialize(salud_inicial)
    @salud = salud_inicial
  end
  
  def descansar!(minutos)
    @salud+=minutos
  end
  
  def salud
    @salud
  end
  
  def gritar
    "¡agrrrg!"
  end
  
  def sabe_correr?
    false
  end
  
  def sin_vida?
    @salud == 0
  end
  
  def recibir_danio!(puntos)
    @salud = [@salud - puntos * 2, 0].max
  end
end

class SuperZombi < Zombi
  def sabe_correr?
    true
  end

  def recibir_danio!(puntos)
    @salud=[@salud -puntos * 3, 0].max
  end

  def regenerarse!
    @salud=100
  end

  def sabe_correr?
    true
  end

  def recibir_danio!(puntos)
    @salud = [@salud - puntos * 3, 0].max
  end
  
  def regenerarse!
    @salud = 100
  end
end
```