var module = angular.module('GarageApp.controllers', []);

module.controller('AppCtrl', function($scope, PiAPI, $window) {

  var init = function(){
    $scope.new = {};
    $scope.new.time = 0;
    PiAPI.getSettings().success(function(data){
      console.log(data);
      $scope.data = {};
      if(data.runforever == "1")
        $scope.data.runforever = true;
      else $scope.data.runforever = false;
      if(data.startnewintervall == "1")
        $scope.data.startnewinterval = true;
      else $scope.data.startnewintervall = false;
      if(data.stopnow == "1")
        $scope.data.stopnow = true;
      else $scope.data.stopnow = false;
      $scope.new.time = parseInt(data.time_to_run);
    })
  }

  init();

  $scope.settime = function(){
    var time = $scope.new.time;
    PiAPI.timetorun(time, function(response){
      $scope.response = "Intervall gesetzt.";
      $window.location.reload(true);
    });
  }

  $scope.stopnow = function(){
    PiAPI.stopnow("1", function(response){
      $scope.response = "Stop Now gesetzt.";
      $window.location.reload(true);
    });

  }

  $scope.runforever = function(){
    PiAPI.runforever("1", function(response){
      $scope.response = "Run Forever gesetzt.";
      $window.location.reload(true);
    });

  }

  $scope.newinterval = function(){
    PiAPI.startnewintervall("1", function(response){
      $scope.response = "Start New Intervall gesetzt.";
      $window.location.reload(true);
    });
  }

  //if(Credentials) $rootScope.auth = true;

});
