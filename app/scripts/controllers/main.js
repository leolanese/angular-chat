'use strict';

/**
 * @ngdoc function
 * @name fooApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fooApp
 */
angular.module('fooApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
