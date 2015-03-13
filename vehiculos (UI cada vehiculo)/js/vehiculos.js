var Motor = function (_numeroSerie, _cilindraje) {
  var numeroSerie = _numeroSerie,
    cilindraje = _cilindraje,
    estado = false,
    velocidad = 0;

  this.getNumeroSerie = function () {
    return numeroSerie;
  };
  this.getCilindraje = function () {
    return cilindraje;
  };
  this.getEstado = function () {
    return estado;
  };
  this.getVelocidad = function () {
    return velocidad;
  };

  this.encender = function () {
    if (estado) {
      console.warn('El motor ya está encendido!');
    } else {
      estado = true;
      console.info('Encendí el motor.');
    }
    return this;
  };
  this.apagarse = function () {
    if (estado) {
      estado = false;
      velocidad = 0;
      console.info('Apagué el motor.');
    } else {
      console.warn('El motor ya está apagado!');
    }
    return this;
  };

  this.acelerar = function (kmPorHora) {
    if (estado) {
      velocidad += kmPorHora;
      console.info('Aceleré a ', velocidad);
    } else {
      console.warn('Debe encender el motor primero!');
    }
    return this;
  };
  this.desacelerar = function (kmPorHora) {
    if (estado) {
      if (velocidad - kmPorHora <= 0) {
        velocidad = 0;
      } else {
        velocidad -= kmPorHora;
      }
      console.info('Desaceleré a ', velocidad);
    } else {
      console.warn('Ya está detenido!');
    }
    return this;
  };
};

var Llanta = function () {
  this.rodar = function () {
    console.info('La llanta esta rodando');
  };
  this.detenerse = function () {
    console.info('La llanta esta detenida');
  };
};

var Vehiculo = function (_marca, _modelo, _color, _serieMotor, _cilindrajeMotor, _numeroLlantas) {
  var i,
    marca = _marca,
    modelo = _modelo,
    color = _color,
    estado = false,
    motor = new Motor(_serieMotor, _cilindrajeMotor), // agregación 1 - 1
    llantas = []; // agregación 1 - n

  // efecto secundario
  for (i = 0; i < _numeroLlantas; i += 1) {
    llantas.push(new Llanta());
  }

  this.getMarca = function () {
    return marca;
  };
  this.getModelo = function () {
    return modelo;
  };
  this.getColor = function () {
    return color;
  };
  this.getEstado = function () {
    return estado;
  };
  this.getMotor = function () {
    return motor;
  };
  this.getLlantas = function () {
    return llantas;
  };
  this.getTipo = function () {
    return "Vehiculo";
  };

  this.setColor = function (nuevoColor) {
    color = nuevoColor;
    return this;
  };
  this.setMotor = function (nuevoMotor) {
    if (nuevoMotor instanceof Motor) {
      motor = nuevoMotor;
    } else {
      console.warn("Eso no puede asignarse como motor!");
    }
    return this;
  };

  this.pushLlanta = function () {
    llantas.push(new Llanta());
    return this;
  };

  this.arrancar = function () {
    if (estado) {
      console.warn('El vehículo ya está encendido!');
    } else {
      motor.encender();
      estado = true;
    }
    return this;
  };
  this.apagarse = function () {
    if (estado) {
      motor.apagarse();
      estado = false;
    } else {
      console.warn('El vehículo ya está apagado!');
    }
    return this;
  };

  this.avanzar = function () {
    if (estado) {
      motor.acelerar(20);
      llantas.forEach(function (llanta) {
        llanta.rodar();
      });
    } else {
      console.warn('Debe encender el vehículo!');
    }
    return this;
  };
  this.detenerse = function () {
    var velocidadActual = motor.getVelocidad();
    motor.desacelerar(velocidadActual);
    llantas.forEach(function (llanta) {
      llanta.detenerse();
    });
    return this;
  };
};


// HERENCIA

var Automovil = function (_marca, _modelo, _color, _serieMotor, _cilindrajeMotor) {
  Vehiculo.call(this, _marca, _modelo, _color, _serieMotor, _cilindrajeMotor, 4);

  this.getTipo = function () {
    return "Automovil";
  };
};

Automovil.prototype = new Vehiculo();
Automovil.prototype.constructor = Automovil;

var Camion = function (_marca, _modelo, _color, _serieMotor, _cilindrajeMotor) {
  Vehiculo.call(this, _marca, _modelo, _color, _serieMotor, _cilindrajeMotor, 8);

  this.getTipo = function () {
    return "Camion";
  };
};

Camion.prototype = new Vehiculo();
Camion.prototype.constructor = Camion;

var Moto = function (_marca, _modelo, _color, _serieMotor, _cilindrajeMotor) {
  Vehiculo.call(this, _marca, _modelo, _color, _serieMotor, _cilindrajeMotor, 2);

  this.getTipo = function () {
    return "Moto";
  };
};

Moto.prototype = new Vehiculo();
Moto.prototype.constructor = Moto;
