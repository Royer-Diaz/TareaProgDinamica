/*global Vehiculo, Camion, Moto, Automovil*/

var Vehiculos = [];

var refrescarTabla = function () {
  var vehiculoRow;
  $('#tabla-vehiculo tbody').html('');`
  Vehiculos.forEach(function (vehiculo, i) {
    vehiculoRow = '<tr data-index="' + i + '">';
    vehiculoRow += '<td>' + vehiculo.getTipo() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getMarca() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getModelo() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getColor() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getMotor().getNumeroSerie() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getMotor().getCilindraje() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getLlantas().length + '</td>';
    vehiculoRow += '<td><span data-index="' + i + '" class="delete">&otimes;</span></td>';
    vehiculoRow += '</tr>';
    $('#tabla-vehiculo tbody').append(vehiculoRow);
  });

  $('#tabla-vehiculo .delete').click(function () {
    Vehiculos.splice($(this).data('index'), 1);
    refrescarTabla();
  });
};

$(document).ready(function () {

  $('#crear-vehiculo').click(function () {
    $('#form-vehiculo').stop().slideDown();
  });
  $('#cancel-vehiculo').click(function () {
    $('#form-vehiculo').stop().slideUp(300, function () {
      $('#form-vehiculo input').val('');
    });
  });

  $('#submit-vehiculo').click(function () {
    var nuevoVehiculo;

    switch ($('#select-tipo').val()) {
    case 'camion':
      nuevoVehiculo = new Camion($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
      break;
    case 'moto':
      nuevoVehiculo = new Moto($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
      break;
    default:
      nuevoVehiculo = new Automovil($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
    }

    Vehiculos.push(nuevoVehiculo);


    refrescarTabla();
    // $('#form-vehiculo input').val('');
  });

});