var rootUrl = 'http://kawal.apps.rockybars.com';
var editorUrl = 'http://www.kawalmenteri.org/#0.0.';
var kawalCtrls = angular.module('kawalCtrls', []);

kawalCtrls.controller('PositionsCtrl', ['$scope', '$http', function($scope, $http){
  $scope.list = function(){
    $scope.loading = true;
    $http.get(rootUrl + '/kawal')
    .success(function(res){
      $scope.positions = res.positions;
      $scope.loading = false;
    })
    .error(function(){
      $scope.loading = false;
    });
  }
  $scope.list();
}]);

kawalCtrls.controller('CandidatesCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.list = function(){
    $scope.loading = true;
    $scope.name = $routeParams.name;
    $scope.link = editorUrl + $routeParams.name.split(' ').join('') + '.' + $routeParams.name;
    $http.get(rootUrl + '/kawal/' + $routeParams.name)
    .success(function(res){
      $scope.candidates = res.candidates;
      $scope.loading = false;
    })
    .error(function(){
      $scope.loading = false;
    });
  }
  $scope.list();
}]);

kawalCtrls.controller('CandidateCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.list = function(){
    $scope.loading = true;
    $scope.params = $routeParams;
    $scope.name = $routeParams.name;
    $http.get(rootUrl + '/kawal/inspect/' + $routeParams.name)
    .success(function(res){
      $scope.images = res.images;
      $scope.links = res.links;
      $scope.loading = false;
    })
    .error(function(){
      $scope.loading = false;
    });
  }
  $scope.list();
}]);