/*global angular app */

'use strict';

var api = angular.module('csbApp.api', ['ngResource']);

api.factory('CSBMerchant', ['$resource', function($resource){
	return $resource('http://api.test.muulla.com/app/merchant/all/10/1');
}]);