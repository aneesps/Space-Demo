  



  var app = angular.module('myApp', []);
             
            app.controller('profileCtrl', function($scope, $http) {
            	$scope.arra=[];
            $http.get("../assets/json/employee.json")
            .success(function (data) {$scope.names =data;
   
            	$scope.arra = data[0].basic.split(",");
            	$scope.genders=["male","female","..."];
                $scope.blood_groups=["A+","A-","B+","B-","AB+","AB-","O+","O-"];

            
            });
            });