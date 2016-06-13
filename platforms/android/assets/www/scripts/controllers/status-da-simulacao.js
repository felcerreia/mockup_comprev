'use strict';

/**
 * @ngdoc function
 * @name comprevApp.controller:StatusDaSimulacaoCtrl
 * @description
 * # StatusDaSimulacaoCtrl
 * Controller of the comprevApp
 */
angular.module('comprevApp')
  .controller('StatusDaSimulacaoCtrl', [ function () {
    this.irregulares = 8;
    this.transmitidasIrregulares = 16;
    this.aguardandoTranmissao = 52;
    this.transmitidas = 82;

    this.add = function (a) {
      this[a]++;
    }
  }]);
