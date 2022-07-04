# Ejercicio 6: Conociendo el país

Created: July 3, 2022 5:33 PM

```ruby
module Pepita
    @energia = 100
  
    def self.volar_en_circulos!
        @energia = @energia -= 10
    end
  
    def self.comer_lombriz!
        @energia = @energia += 20
    end
  
    @ciudad = Iruya
    def self.volar_hacia!(destino)
        @energia = @energia -= 100
        @ciudad = destino
    end
  
end
```