'use strict';

describe('Controller: MerchantCtrl', function () {

  // load the controller's module
  //beforeEach(module('csbApp'));

  beforeEach(function(){
    module('csbApp.api');
    module('csbApp');
  });

  var MerchantCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, CSBMerchant) {
    scope = $rootScope.$new();
    MerchantCtrl = $controller('MerchantCtrl', {
      $scope: scope, CSBMerchant: CSBMerchant
    });
  }));

  it('should attach a list of merchants to the scope', function () {
    expect(scope.merchants.length).toBe(6);
  });

});
