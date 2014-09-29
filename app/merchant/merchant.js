/*global angular app */

'use strict';


angular.module('csbApp')
	.controller('MerchantCtrl', ['$scope', '$http', 'CSBMerchant',function ($scope,$http,CSBMerchant) {
	
		$http.defaults.headers.common['x-device-latitude']	= 0; 
		$http.defaults.headers.common['x-device-longitude']	= 0; 

		//Response accessed via promised to ensure results are rendered after response has come back
		CSBMerchant.get() 
			.$promise.then(function(response) {
		      $scope.merchants = response.data || [];
		      $scope.pagination = response.pagination;
		    });

	}]);