  



  var app = angular.module('myApp', []);
            app.controller('customersCtrl', function($scope, $http) {
            $http.get("../assets/json/employee.json")
            .success(function (data) {$scope.names =data;});
            });