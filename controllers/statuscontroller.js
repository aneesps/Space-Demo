// this controller controls the model and view of the daily status page
mainApp.controller("statusController", function($scope,$http) {
		$scope.statuses=[];
		$scope.hoursList=[];
		for(i=1;i<=24;i++){
			$scope.hoursList.push({
				value:i,
				hour:i
			});
		}
		$scope.minutesList=[];
		for(i=0;i<4;i++){
			$scope.minutesList.push({
				value:i,
				minute:i*15
			});
		}
		$scope.dateValues = [];
		$scope.activities=['training','coding','testing','debugging'];
		var d = new Date();
		
		$scope.today = new Date();
		for(i=0;i<7;i++)
		{

				$scope.dateValues.push({
					'date':d.setDate(d.getDate()-1),
					'value':i
				})
				
		};
		$http.get('assets/json/projects.json').success(function(response){
			$scope.projects = response;
		});
		 $scope.saved = localStorage.getItem('statuses');
         $scope.statuses = (localStorage.getItem('statuses') !== null) ? JSON.parse($scope.saved) : [];
         console.log($scope.saved);
        $scope.submit = function() {
			$scope.statuses.push({
								'date':$scope.dateValues[$scope.date].date,
								'todayDate':$scope.today,
								'activity':$scope.activities[$scope.activity],
								'project':$scope.projects[$scope.project-1].name,
								'hours':$scope.hoursList[$scope.hours-1].hour,
								'minutes':$scope.minutesList[$scope.minutes].minute,
								'report':$scope.report
							});
			localStorage.setItem('statuses', JSON.stringify($scope.statuses));

        };

    
});
