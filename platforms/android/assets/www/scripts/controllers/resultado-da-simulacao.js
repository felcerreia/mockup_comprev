'use strict';

/**
 * @ngdoc function
 * @name comprevApp.controller:ResultadoDaSimulacaoCtrl
 * @description
 * # ResultadoDaSimulacaoCtrl
 * Controller of the comprevApp
 */
angular.module('comprevApp')
  .controller('ResultadoDaSimulacaoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $rootScope.backUrl = "#/nova-simulacao";
    $scope.novaSimulacao = {
      cpf: 10441556410,
      dataNascimento: new Date(1980, 2, 21),
      produto: 'Produto 2'
    };

  }]);
