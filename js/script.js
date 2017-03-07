var esteban = angular.module('esteban',[]);
esteban.controller('operacion', function($scope) {
$scope.precio = 900
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
});