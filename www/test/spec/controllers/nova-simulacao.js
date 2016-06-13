'use strict';

describe('Controller: NovaSimulacaoCtrl', function () {

  // load the controller's module
  beforeEach(module('comprevApp'));

  var NovaSimulacaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NovaSimulacaoCtrl = $controller('NovaSimulacaoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NovaSimulacaoCtrl.awesomeThings.length).toBe(3);
  });
});
