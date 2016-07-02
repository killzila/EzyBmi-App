// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})





.controller('bmiController', ['$scope', function($scope){

  $scope.name = "";
  $scope.height = 0 ;
  $scope.weight = 0;
  $scope.result= "";

  $scope.calBMI = function(pname,pheight,pweight){
    $scope.heightM = pheight / 100;
    $scope.cal = pweight / ( $scope.heightM * $scope.heightM ) ;
    $scope.result =  pname  + " :" + $scope.cal ;
      if ($scope.cal  < 18.5 ) {
          $scope.result =  pname  + " :" + $scope.cal  + " : น้ำหนักต่ำกว่าเกณฑ์" ; 
      } else if ($scope.cal  >= 18.5   && $scope.cal  <= 23.4 ) {
        $scope.result =  pname  + " :" + $scope.cal  + " : น้ำหนักอยู่ในเกณฑ์ปกติ" ; 
      } else if ($scope.cal  >= 23.5   && $scope.cal  <= 28.4 ) {
        $scope.result =  pname  + " :" + $scope.cal  + " : น้ำหนักเกินแล้ว" ; 
      } else if ($scope.cal  >= 28.5   && $scope.cal  <= 34.9 ) {
        $scope.result =  pname  + " :" + $scope.cal  + " : โรคอ้วนขั้นที่ 1" ; 
      } else if ($scope.cal  >= 35.0   && $scope.cal  <= 39.9 ) {
        $scope.result =  pname  + " :" + $scope.cal  + " : โรคอ้วนขั้นที่ 2" ; 
      } else  {
        $scope.result =  pname  + " :" + $scope.cal  + " : โรคอ้วนขั้นสูงสุด" ; 
      }
  }

}])