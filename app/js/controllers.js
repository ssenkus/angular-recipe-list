'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('RecipeBuilderCtrl', function($scope, $http) {

    $scope.recipeItem = '';

    $http({
        method: 'GET',
        url: document.location.href.match(/(^[^#]*)/)[0] + 'js/json/items.json'}).
        success(function(data, status, headers, config) {
        $scope.recipeItems = data;
        console.log($scope.recipeItems);
    }).error(function(data, status, headers, config) {
        alert('error fetching json!!!')
    });

    $scope.selected = false;
    $scope.selectItem = function(item) {
        console.log('item clicked', item);
        
        
    }


})
    .controller('MyCtrl2', [function() {

    }]);