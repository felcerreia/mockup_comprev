'use strict';

/**
 * @ngdoc overview
 * @name comprevApp
 * @description
 * # comprevApp
 *
 * Main module of the application.
 */
angular
  .module('comprevApp', [
    'ngAnimate',
    'ngAria',
    'ngSanitize',
    'ngMessages',
    'ngMaterial',
    'ngMask',
    'ngRoute'
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        title: '',
        toolbar: false,
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }).when('/status-da-simulacao', {
        title: 'Visão Geral',
        templateUrl: 'views/status-da-simulacao.html',
        controller: 'StatusDaSimulacaoCtrl',
        controllerAs: 'statusDaSimulacao'
      }).when('/lista-de-simulacoes', {
        title: 'Visão Geral',
        templateUrl: 'views/lista-de-simulacoes.html',
        controller: 'ListaDeSimulacoesCtrl',
        controllerAs: 'listaDeSimulacoes'
      }).when('/nova-simulacao', {
        title: 'Nova Simulação',
        templateUrl: 'views/nova-simulacao.html',
        controller: 'NovaSimulacaoCtrl',
        controllerAs: 'novaSimulacao'
      }).when('/resultado-da-simulacao', {
        templateUrl: 'views/resultado-da-simulacao.html',
        controller: 'ResultadoDaSimulacaoCtrl',
        controllerAs: 'resultadoDaSimulacao'
      }).otherwise('/login')
  }]).config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('blue', {
        'default': '900'
      }).warnPalette('red');
  }]).run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = (current.$$route.title ? current.$$route.title : 'Comprev');
      $rootScope.haveToolbar = (current.$$route.toolbar === false ? false : true);
      $rootScope.backUrl = false;
    });
  }]).filter('idadeFilter', function () {
    function calculateAge(birthday) {
      if (!birthday) {
        return '';
      }
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return function (birthdate) {
      return calculateAge(birthdate);
    };
  }).controller('appCtrl', function ($scope, $mdSidenav, $location) {
    $scope.$back = function () {
      window.history.back();
    };
    $scope.openSideNavPanel = function () {
      $mdSidenav('left').open();
    };
    $scope.closeSideNavPanel = function () {
      $mdSidenav('left').close();
    };

    $scope.goTo = function(url) {
      console.log(url);
      $location.url(url);
      $scope.closeSideNavPanel();
    }


    $scope.menuItems = [
      {
        name: 'Minhas Configurações',
        icon: '&#xE8B8;',
        label: 'Minhas Configurações',
        link: '#'
      },
      {
        name: 'Status das Simulações',
        icon: '&#xE896;',
        label: 'Status das Simulações',
        link: 'status-da-simulacao'
      },
      {
        name: 'Nova Simulação',
        icon: '&#xE02E;',
        label: 'Nova Simulação',
        link: 'nova-simulacao'
      },
      {
        name: 'Logout',
        icon: '&#xE8AC;',
        label: 'Logout',
        link: 'login'
      }
    ];
  });
