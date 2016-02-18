// statusApp = angular.module("statusApp", []);
mainApp.controller("statusController", function($scope) {
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
		$scope.dateValues = [{
			'date':'',
			'value':''
		},{
			'date':'',
			'value':''
		},{
			'date':'',
			'value':''
		},{
			'date':'',
			'value':''
		},{
			'date':'',
			'value':''
		},{
			'date':'',
			'value':''
		},{
			'date':'',
			'value':''
		}];
		$scope.activities=['training','coding','testing','debugging'];
		var d = new Date();
		$scope.today=d;
		for(i=0,j=0;i<7;i++,j++)
		{
				$scope.dateValues[j].date=d.setDate(d.getDate()-1);
				$scope.dateValues[j].value=i;
		};
		
		
        $scope.submit = function() {
			$scope.statuses.push({
								'date':$scope.dateValues[$scope.date].date,
								'todayDate':$scope.today,
								'activity':$scope.activities[$scope.activity],
								'project':$scope.project,
								'hours':$scope.hoursList[$scope.hours-1].hour,
								'minutes':$scope.minutesList[$scope.minutes].minute,
								'report':$scope.report
							});
			
        };

    
});
