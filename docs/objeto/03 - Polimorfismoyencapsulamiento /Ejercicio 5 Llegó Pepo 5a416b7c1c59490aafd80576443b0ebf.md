# Ejercicio 5: Llegó Pepo

Created: July 3, 2022 6:00 PM

```ruby
module Obera
    def self.kilometro
        1040
    end

    def self.distancia_a(destino)
        (destino.kilometro - self.kilometro).abs
    end
end

module Iruya
  def self.kilometro
     1710
    end

    def self.distancia_a(destino)
        (destino.kilometro - self.kilometro).abs
    end    
end

module BuenosAires
    def self.kilometro
        0
    end

    def self.distancia_a(destino)
        (destino.kilometro - self.kilometro).abs
    end    
end

module Pepo
  @energia = 1000

  def self.energia
    @energia 
  end

  def self.volar_en_circulos!
    if @energia > 1100
      @energia -= 10
    end
    @energia -= 5
  end

  def self.comer_alpiste!(gramos)
    @energia += gramos / 2
  end  

  def self.hacer_lo_que_quiera!
   comer_alpiste! (120)
  end
end
```