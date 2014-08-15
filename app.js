/*
 * boot the angular app
 */
var kawalApp = angular.module('kawalApp', ['ngRoute', 'kawalCtrls']);

kawalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/positions.html',
        controller: 'PositionsCtrl'
      }).
      when('/kawal/:name', {
        templateUrl: 'partials/candidates.html',
        controller: 'CandidatesCtrl'
      }).
      when('/kawal/inspect/:name', {
        templateUrl: 'partials/candidate.html',
        controller: 'CandidateCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
