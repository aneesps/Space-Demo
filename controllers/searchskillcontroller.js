
var app= angular.module("skillApp",[]);
app.controller("searchskillcontroller",function($scope,$http){
	$scope.skillsData = [];
    $http.get("../assets/json/skills.json").success(function(data) {
      	 $scope.skillsData=data;
      	 
      });
});

