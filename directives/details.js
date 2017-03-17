angular.module('app')
    .directive('detailsComponent', [function () {
        'use strict';
        return {
            controller: 'detailsComponentCtrl',
            restrict: 'AE',
            scope: {
              details:"="
            },
            templateUrl: '../directives/details.tpl.html'
        };
    }])
    .controller('detailsComponentCtrl', ['$scope', '$timeout',
        function ($scope, $timeout) {
            $scope.getInfo = function () {
                $.ajax({
                  method: "GET",
                  url: $scope.details.url
                })
                .success(function(data) {
                  $timeout(function () {
                    $scope.infos = data;
                  });
                })
                .error(function(jqXHR, textStatus, errorThrown) {
                  console.log(jqXHR);
                });
            };
            $scope.getRepos = function () {
                $.ajax({
                  method: "GET",
                  url: $scope.details.repos_url
                })
                .success(function(data) {
                  $timeout(function () {
                    $scope.repos = data;
                  });
                })
                .error(function(jqXHR, textStatus, errorThrown) {
                  console.log(jqXHR);
                });
            };
            $scope.getRepos();
            $scope.getInfo();
    }]);
