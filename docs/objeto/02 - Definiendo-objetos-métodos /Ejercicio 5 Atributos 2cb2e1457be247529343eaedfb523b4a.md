# Ejercicio 5: Atributos

Created: July 3, 2022 5:32 PM

```ruby
module Pepita
    @energia = 100
  
    def self.volar_en_circulos!
        @energia = @energia -= 10
    end
  
    def self.comer_lombriz!
        @energia = @energia += 20
    end
  
end
```