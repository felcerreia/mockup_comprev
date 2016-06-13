'use strict';

describe('Controller: ListaDeSimulacoesCtrl', function () {

  // load the controller's module
  beforeEach(module('comprevApp'));

  var ListaDeSimulacoesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaDeSimulacoesCtrl = $controller('ListaDeSimulacoesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaDeSimulacoesCtrl.awesomeThings.length).toBe(3);
  });
});
