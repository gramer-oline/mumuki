# Ejercicio 12: Empieza el set

Created: July 3, 2022 6:06 PM

```ruby
module Pachorra
  def self.ave=(ave_nueva)
    @ave = ave_nueva
  end
  
  def self.entrenar_ave!
    10.times { @ave.volar_en_circulos! }
    @ave.comer_alpiste! 30
    5.times { @ave.volar_en_circulos! }
    @ave.hacer_lo_que_quiera!
  end
end
```