
angular.module('app')
    .directive('mainComponent', [function () {
        'use strict';
        return {
            controller: 'mainComponentCtrl',
            restrict: 'AE',
            scope: {
            },
            templateUrl: '../directives/main.tpl.html'
        };
    }])
    .controller('mainComponentCtrl', ['$scope', '$timeout',
        function ($scope, $timeout) {

              const url = "https://api.github.com/search/users?q=";

              $scope.title = "Github Search API";
              $scope.name = "google";
              $scope.results = [];
              $scope.message = {display: false, message:""};

              $scope.search = function () {
                $scope.results = [];
                $scope.display = false;
                if(!$scope.name) {
                  $scope.message.message = "You need specific a name for serach";
                  $scope.message.display = true;
                  return;
                }
                console.log("clicked");
                $.ajax({
                  method: "GET",
                  url: url + $scope.name
                })
                .success(function(data) {
                  $timeout(function () {
                    $scope.results = data.items;
                  });
                })
                .error(function(jqXHR, textStatus, errorThrown) {
                  console.log(jqXHR);
                  $scope.message.message = "github api error";
                  $scope.message.display = true;
                });
              }

              $scope.getDetail = function (index) {
                  $scope.details = $scope.results[index];
                  $scope.show = true;
              }
              $scope.back = function () {
                delete $scope.show;
                delete $scope.details;
              }
        }]);
