angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

  $scope.quotes = dataService.getData();
  $scope.removeQuote = dataService.removeData();

    var filterBool = false;
    var removeBool = false;
    var addBool = false;
});
