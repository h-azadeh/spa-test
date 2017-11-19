(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.LunchItemsList = "";
  $scope.ResultMessage = "";

  $scope.CheckLunchList = function(){
    var itemCount = 0;
    var items = $scope.LunchItemsList.split(',');
    itemCount = items.length;

    $scope.ResultMessage = "";
    if(itemCount > 3)
    {
      $scope.ResultMessage = "Too much!";
    }
    else if ($scope.LunchItemsList.length == 0) {
      $scope.ResultMessage = "Please enter data first"
    }
    else {
      $scope.ResultMessage = "Enjoy!";
    }
  };
}


})();

//minified version
//!function(){"use strict";function e(e){e.LunchItemsList="",e.ResultMessage="",e.CheckLunchList=function(){var s=0,t=e.LunchItemsList.split(",");s=t.length,e.ResultMessage="",s>3?e.ResultMessage="Too much!":0==e.LunchItemsList.length?e.ResultMessage="Please enter data first":e.ResultMessage="Enjoy!"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
