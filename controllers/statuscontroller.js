statusApp = angular.module("statusApp", []);
statusApp.controller("statusController", function($scope) {
    
		$scope.statuses=[];
		$scope.dates = [];
		var d = new Date();
		for(i=7,j=7;i>=0;i--,j--)
		{
				$scope.dates[j]=d.setDate(d.getDate()-1);
				console.log($scope.dates);
				console.log(d);
		};
		
        $scope.submit = function() {
			$scope.statuses.push({
								'activity':$scope.activity,
								'project':$scope.project,
								'report':$scope.report
							});
        };

    
});
