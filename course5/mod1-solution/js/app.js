(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";
    $scope.checkDishes = function () {
      if ($scope.dishes == "") {
        $scope.message = "Please enter data first";
        $scope.classBorderColor = "border-red";
        $scope.classTextColor = "text-red";
      } else {
        var countDishes =          //store number of dishes
          $scope.dishes.split(',') //splits string into array
          .filter(dish =>          //filters "empty" dishes like ",," and ", ,"
            dish.trim()            //remove spaces from both sides
            .length > 0            //if not "empty" then includes it in result
          ).length;                //returns number of resulting array elements
        if (countDishes == 0) {
          $scope.message = "Please enter data first";
          $scope.classBorderColor = "border-red";
          $scope.classTextColor = "text-red";
        } else {
          if (countDishes <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
          $scope.classBorderColor = "border-green";
          $scope.classTextColor = "text-green";
        }
      }
    }
  }



})();
