# Ejercicio 11: Para cerrar

Created: July 3, 2022 6:19 PM

```ruby
module Jor
  def self.plato_del_dia=(un_plato)
    @plato_del_dia = un_plato
  end
  
  def self.picantear!
    @plato_del_dia.agregar_ajies! 5
  end
end

module Fideos
  @ajies = 0
  
  def self.ajies
    @ajies
  end  
  
  def self.picantes?
    @ajies > 2
  end
  
  def self.descartar_la_salsa!
    @ajies = 0
  end
  
  def self.agregar_ajies!(unos_ajies)
    @ajies += unos_ajies
  end
  
  def self.quitarle_ajies!(unos_ajies)
    @ajies -= unos_ajies
  end
  
end

module Luchi
  def self.suavizar!(un_plato, unos_ajies)
    if un_plato.ajies > 10
      un_plato.descartar_la_salsa!
    else
      un_plato.quitarle_ajies! unos_ajies
    end
  end
end
```