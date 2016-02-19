
var app= angular.module("skillApp",[]);
app.controller('searchskillcontroller',function($scope,$http,$filter){
	$scope.skillsData = [];
	$http.get("../assets/json/skills.json").success(function(data) {
       $scope.skillsData=data;
      });
    $scope.searchSkill=function(){
    	    if($scope.keyword == undefined){
    	    	return true;}
            $scope.results = $filter('filter')($scope.skillsData, {skills:$scope.keyword} ,function(actual, expected) { 
            	actual=$filter('uppercase')(actual);
            	expected=$filter('uppercase')(expected);
            	return angular.equals(actual, expected)});	
   } ;

 	
});
