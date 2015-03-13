



// HERENCIA


var Mago_Blanco = function (_id. _nombre) {
  Mago.call(this, _id. _nombre, "Tus Tropas han sido Curadas!");

  this.getTipo = function () {
    return "Mago_Blanco";
  };
};

Mago_Blanco.prototype = new Mago();
Mago_Blanco.prototype.constructor = Mago_Blanco;

var Mago_Negro = function (_id. _nombre) {
  Mago.call(this, _id. _nombre, "Los objetivos han sido Derribados!" );

  this.getTipo = function () {
    return "Mago_Negro";
  };
};

Mago_Negro.prototype = new Mago();
Mago_Negro.prototype.constructor = Mago_Negro;

var Mago_Verde = function (_id. _nombre) {
  Mago.call(this, _id. _nombre, "Los objetivos has sido Paralizados");

  this.getTipo = function () {
    return "Mago_Verde";
  };
};

Mago_Verde.prototype = new Mago();
Mago_Verde.prototype.constructor = Mago_Verdeo;


