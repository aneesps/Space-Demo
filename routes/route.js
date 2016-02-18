mainApp = angular.module('mainApp', ['ngRoute']);


mainApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/dailystatus', {
            templateUrl: 'views/dailystatus.html',
            controller: 'statusController'
        }).
        when('/employee', {
            templateUrl: 'views/employeeview.html',
            controller: 'profileController'
        }).

        otherwise({
            redirectTo: '/dashboard'
        })
    }
]);