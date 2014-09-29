/*global angular app */

'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # cbsApp
 *
 * Main module of the application.
 */

 var app = angular.module('csbApp', ['ngRoute', 'csbApp.api']);

 //Routing set to display merchants
 app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .otherwise({
      templateUrl: 'merchant/main.html'
    });
}]);

