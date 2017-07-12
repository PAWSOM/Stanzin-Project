var app = angular.module('myRoleApp', [
//  'myRoleApp.services',
//  'myRoleApp.controllers',
  'ngRoute' 
]);
       app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                    when("/", 
                        {
                         templateUrl: "partials/roleManager.html", 
                         controller: "formCtrl"
                  });
          }]);
      
    app.controller('roleController', function($scope) {
      // create a message to display in our view
      $scope.message = 'Everyone come and see how good I look!';
    });
         
//    var app = angular.module('myRoleApp', []);
    app.controller('formCtrl', ['$scope' ,'$http',  function($scope,$http) {
        
        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
        $scope.currentTab ='SetRole';
        
        $scope.setRole = function(){  
             $scope.setData= "";
//             $scope.successFlag = false
             $http({method: 'GET', url: '/db/setRole?empId='+$scope.employeeIdForSet+'&roleNo='+$scope.roleNo+'&env='+$scope.myVar1}).
                success(function(data, status) {                    
                      $scope.setData = "Cheers! Role set to : "+$scope.roleNo;
                      $scope.successFlag = true
//                       console.log("Point here:"+data[0].role_id);                       
                }).
                error(function(data, status) {
                  $scope.setData = "Something went wrong"; 
                  $scope.successFlag = false
              }); 
        };    
        
        $scope.getRole = function(){  
             $scope.getData= ""; 
//             $scope.successFlag = false
             $http({method: 'GET', url: '/db/getRole?empId='+$scope.employeeIdForGet+'&env='+$scope.myVar2}).
                success(function(data, status) {                    
                      $scope.getData = "Cheers! Role found : "+data[0].role_id;
                      $scope.successFlag = true
                }).
                error(function(data, status) {
                  $scope.getData =  "Something went wrong"; 
                  $scope.successFlag = false
              }); 
        };    
        
        $scope.clearSet = function () {
            $scope.employeeIdForSet = "";            
            $scope.roleNo = "";
            $scope.myVar1 = "";
            $scope.setData= "";
            $scope.successFlag= "";
            
        };
        
        $scope.clearGet = function () {           
            $scope.employeeIdForGet = "";
            $scope.myVar2 = "";  
            $scope.getData= "";
           
            
        };
        
        $scope.tabOpen = function(tab){
           $scope.currentTab = tab; 
        };
    }]);

//    app.controller('TabController', ['$scope', function($scope) {
//        $scope.tab = 1;
//
//        $scope.setTab = function(newTab){
//          $scope.tab = newTab;
//        };
//
//        $scope.isSet = function(tabNum){
//          return $scope.tab === tabNum;
//        };
//    }]);
//  
//    function openTab(evt, tab) {
//        var i, tabcontent, tablinks;
//        tabcontent = document.getElementsByClassName("tabcontent");
//        for (i = 0; i < tabcontent.length; i++) {
//            tabcontent[i].style.display = "none";
//        }
//        tablinks = document.getElementsByClassName("tablinks");
//        for (i = 0; i < tablinks.length; i++) {
//            tablinks[i].className = tablinks[i].className.replace(" active", "");
//        }
//        document.getElementById(tab).style.display = "block";
//        evt.currentTarget.className += " active";
//    }