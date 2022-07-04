# Ejercicio 15: ¡Se va la que falta!

Created: July 3, 2022 6:08 PM

```ruby
module Inodoro
  @cafeina_en_sangre = 90
  def self.cafeina_en_sangre
    @cafeina_en_sangre
  end
  
  def self.compinche
    @compinche
  end
  
  def self.compinche=(nuevo)
    @compinche=nuevo
  end
  
  def self.tomar_mate!
    compinche.recibir_mate!
    @cafeina_en_sangre += 10
  end
  
end

module Eulogia
  @enojada = false
  
  def self.enojada?
    @enojada
  end
  
  def self.recibir_mate!
    @enojada = true
  end
end

module Mendieta
  @ganas_de_hablar = 5
  
  def self.ganas_de_hablar
    @ganas_de_hablar
  end
  
    def self.ganas_de_hablar=cambiar_ganas
    @ganas_de_hablar=cambiar_ganas
  end
  
  def self.recibir_mate!
    @ganas_de_hablar = 0
  end
end
```