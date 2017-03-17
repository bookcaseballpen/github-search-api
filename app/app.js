(function(angular){
  var app = angular.module('app',[]);

  app.controller('mainCtrl', ['$scope',
      function($scope) {
  }]).filter('fromNow', function () {
      return function (item) {
          if (!item) return '';
          return moment(item).fromNow();
      };
  });
})(angular);
