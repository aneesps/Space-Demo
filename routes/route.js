mainApp = angular.module('mainApp',['ngRoute']);


mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/dailystatus', {
      templateUrl : 'views/dailystatus.html',
      controller : 'statusController'
    }).
    when('/employee', {
      templateUrl : 'views/employeeview.html',
      controller : 'statusController'
    }).

otherwise({
      redirectTo: '/dashboard'
    })
  }]);





































// ines (21 sloc)  654 Bytes
// var spaceApp = angular.module('spaceApp', ['ngRoute','currentUserServices']);

// spaceApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//     when('/dashboard', {
//       templateUrl : '../views/partials/dashboard.html',
//       controller : 'dashboardController'
//     }).
//     when('/projects',{
//       templateUrl : '../views/partials/projectList.html',
//       controller : 'projectListController'
//     }).
//     when('/vacation',{
//       templateUrl : '../views/partials/vacation.html',
//       controller : 'vacationController',
//       css : '../assets/stylesheets/vacation.css'
//     }).
//     otherwise({
//       redirectTo: '/dashboard'
//     })
//   }]);