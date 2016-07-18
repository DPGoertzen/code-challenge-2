var app = angular.module('challengeApp', []);

app.controller("ChallengeController", function($scope, $http){

  function handleSuccess(response){
    $scope.studentList = response.data;
    console.log("success", response);
  }

  function handleFailure(response){
    console.log("there's been a tire fire", response);
  }

  $scope.getStudents = function() {
    console.log("We Clicked!");
    $http.get('/students').then(handleSuccess, handleFailure);
  }




});
