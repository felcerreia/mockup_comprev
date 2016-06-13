'use strict';

describe('Controller: StatusDaSimulacaoCtrl', function () {

  // load the controller's module
  beforeEach(module('comprevApp'));

  var StatusDaSimulacaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatusDaSimulacaoCtrl = $controller('StatusDaSimulacaoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StatusDaSimulacaoCtrl.awesomeThings.length).toBe(3);
  });
});
