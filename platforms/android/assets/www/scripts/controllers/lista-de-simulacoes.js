'use strict';

/**
 * @ngdoc function
 * @name comprevApp.controller:ListaDeSimulacoesCtrl
 * @description
 * # ListaDeSimulacoesCtrl
 * Controller of the comprevApp
 */
angular.module('comprevApp')
  .controller('ListaDeSimulacoesCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.backUrl = "#/status-da-simulacao";
    this.listaSimulacoes = [{
      status: 'Irregular',
      nome: 'Lavinia Melo Ribeiro',
      data: '09/06/2016',
      cpf: '736.316.641-25'
    },
    {
      status: 'Irregular',
      nome: 'Carolina Castro Almeida',
      data: '09/06/2016',
      cpf: '747.044.802-08'
    },
    {
      status: 'Irregular',
      nome: 'Renan Barros Costa',
      data: '08/06/2016',
      cpf: '221.634.399-41'
    },
    {
      status: 'Irregular',
      nome: 'Mariana Cardoso Alves',
      data: '04/06/2016',
      cpf: '981.519.252-30'
    },
    {
      status: 'Irregular',
      nome: 'Gustavo Cunha Correia',
      data: '03/06/2016',
      cpf: '996.088.858-41'
    },
    {
      status: 'Irregular',
      nome: 'Guilherme Alves Rodrigues',
      data: '01/06/2016',
      cpf: '278.460.080-72'
    },
    {
      status: 'Irregular',
      nome: 'Livia Sousa Martins',
      data: '30/05/2016',
      cpf: '956.408.115-79'
    },
    {
      status: 'Irregular',
      nome: 'Brenda Barbosa Martins',
      data: '28/05/2016',
      cpf: '926.690.985-84'
    },
    {
      status: 'Irregular',
      nome: 'Diego Martins Correia',
      data: '27/05/2016',
      cpf: '177.962.195-71'
    }]
  }]);
