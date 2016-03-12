var module = angular.module('GarageApp.factories', []);
var resturl = "http://192.168.1.31/";


module.factory("PiAPI", function($http) {
  var PiAPI = [];

  PiAPI.getSettings = function(){
    return $http.get(resturl + 'get');
  }

  PiAPI.runforever = function(value, callback){
    callback($http.get(resturl + 'set/runforever/?value=' + value));
  }

  PiAPI.startnewintervall = function(value, callback){
    callback($http.get(resturl + 'set/startnewintervall/?value=' + value));
  }

  PiAPI.stopnow = function(value, callback){
    callback($http.get(resturl + 'set/stopnow/?value=' + value));
  }

  PiAPI.timetorun = function(time, callback){
    callback($http.get(resturl + 'set/time_to_run/?value=' + time));
  }

  return PiAPI;

})
