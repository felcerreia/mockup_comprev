'use strict';

/**
 * @ngdoc function
 * @name comprevApp.controller:NovaSimulacaoCtrl
 * @description
 * # NovaSimulacaoCtrl
 * Controller of the comprevApp
 */
angular.module('comprevApp')
  .controller('NovaSimulacaoCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.backUrl = "#/status-da-simulacao";
  }]);
