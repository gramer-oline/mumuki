# Ejercicio 14: Vamos terminando

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
end

module Eulogia
  @enojada = false
  
  def self.enojada?
    @enojada
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
  
end
```