'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('RecipeBuilderCtrl', function($scope, $http) {

    $scope.recipeItem = '';
    $scope.recipeItems = [];
    $http({
        method: 'GET',
        url: document.location.href.match(/(^[^#]*)/)[0] + 'js/json/items.json'}).
        success(function(data, status, headers, config) {
        $scope.recipeItems = data;
        console.log($scope.recipeItems);
    }).error(function(data, status, headers, config) {
        alert('error fetching json!!!');
    });


    $scope.selectedItems = [];

    $scope.selected = false;
    $scope.selectItem = function(item) {
        console.log('item clicked', item);
        $scope.selectedItems.push(item);
        console.log('selectedItems', $scope.selectedItems);
    };




})
    .controller('browseByCategoryCtrl', [function() {
        
        // kludge until I find out how to D.R.Y. the GET request
        $http({
            method: 'GET',
            url: document.location.href.match(/(^[^#]*)/)[0] + 'js/json/items.json'}).
            success(function(data, status, headers, config) {
            $scope.recipeItems = data;
            console.log($scope.recipeItems);
        }).error(function(data, status, headers, config) {
            alert('error fetching json!!!');
        });
        
        alert()
        
        
    }]);