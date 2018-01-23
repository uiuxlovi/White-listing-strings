var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
  $scope.doSomething = function () {
    alert('Submitted!');
  }
});

app.directive('whitelist', function (){
   return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var whitelist = attr.whitelist.split(',');
          ngModel.$parsers.unshift(function (value) {
            console.log(value);
             ngModel.$setValidity('whitelist', whitelist.indexOf(value) === 0 || whitelist.indexOf(value) === 1);
             return value;
          });
      }
   };
});
