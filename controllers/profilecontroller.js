  var app = angular.module('myApp', []);
  app.controller('profileCtrl', function($scope, $http) {
      $scope.arra = [];
      $http.get("../assets/json/employee.json").success(function(data) {
      	  $scope.count=-0;
          $scope.names = data;
          console.log($scope.names);
          $scope.arra = data[0].basic.split(",");
          $scope.empname = data[0].name;

          $scope.genders = ["male", "female", "..."];
          $scope.blood_groups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
          $scope.saved = localStorage.getItem('employees');

          $scope.able = true
          $scope.d_able = function(){
          	$scope.able= false;
            $scope.rem = true;
            $scope.sho=true;

          }

          $scope.emp_array = eval($scope.saved);
          console.log($scope.emp_array);
      
          
          $scope.submit = function() {
              $scope.names.push({
                  emp_name: $scope.empname,
                  skype_id: $scope.emp_skype_id,
                  mobile_no: $scope.emp_mobile_no,
                  residence_no: $scope.emp_residence_no,
                  permanent_house_name: $scope.permanent_house_name,
                  current_house_name: $scope.current_house_name,
                  permanent_street_name: $scope.permanent_street_name,
                  current_street_name: $scope.current_street_name,
                  permanent_city: $scope.permanent_city,
                  current_city: $scope.current_city,
                  permanent_post_office: $scope.permanent_post_office,
                  office_post_office: $scope.office_post_office,
                  email: $scope.email,
                  mother_name: $scope.mother_name,
                  father_name: $scope.father_name,
                  nationality: $scope.nationality,
                  dob_official: $scope.dob_official,
                  dob_alternate: $scope.dob_alternate,
                  gender: $scope.gender,
                  blood_group: $scope.blood_group,
                  spouse_name: $scope.spouse_name,
                  spouse_dob: $scope.spouse_dob,
                  child_dob: $scope.child_dob,
                  dob_alternate: $scope.dob_alternate
              });
              localStorage.setItem('employees', JSON.stringify($scope.names));
          }
               $scope.cop = function(){             
                  $scope.current_house_name = $scope.permanent_house_name;                
                  $scope.current_street_name = $scope.permanent_street_name;            
                  $scope.current_city = $scope.permanent_city;                 
                  $scope.office_post_office = $scope.permanent_post_office;
          }
               $scope.addChild = false;
               $scope.addChild1 = false;
               $scope.addChild2 = false;
               $scope.addChild3 = false;
               $scope.rem = false;
               $scope.hide= false;
               $scope.sho=false;
               $scope.add = function(){
               	
               	$scope.count = $scope.count + 1;
               	$scope.hide = true;

               	if($scope.count == "1"){
               	$scope.addChild = true;
                  }
                  if($scope.count == "2"){
               	$scope.addChild1 = true;
                  }
                  if($scope.count == "3"){
               	$scope.addChild2 = true;
                  }
                  if($scope.count == "4"){
               	$scope.addChild3 = true;
                  }
                }
            $scope.remove = function()
            {

               $scope.addChild = false;
               $scope.addChild1 = false;
               $scope.addChild2 = false;
               $scope.addChild3 = false;
               $scope.hide = false;
               $scope.count = 0;
               }    
           $scope.save = function()
           {
             $scope.rem = false;
              $scope.able = true;



           }    



      });
  });
  